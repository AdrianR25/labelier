import * as idb from 'https://unpkg.com/idb-keyval@5.0.2/dist/esm/index.js';
import AppImage from './model/AppImage.js';
import AppStatus from './model/AppStatus.js';
import AppImageLabel from './model/AppImageLabel.js';
import { exportString } from './exportService.js';

let fileHandles = [];
let currentIndex = -1;

export async function loadDirectory(loadAction) {
    if (loadAction === "New") {
        return _loadNewDirectory();
    } else if (loadAction === "Saved") {
        return _loadSavedDirectory();
    } else {
        throw new Error('Invalid loadAction. Only "New" or "Saved" allowed.');

    }
}

async function _loadNewDirectory() {
    try {
        let directoryHandle;
        try {
            directoryHandle = await window.showDirectoryPicker();
        } catch {
            return "Canceled";
        }

        await idb.clear();

        // Save directory to IndexedDB            
        await idb.set('directory', directoryHandle);
        console.log(`Saved new directory handle "${directoryHandle.name}" to IndexedDB.`);

        await _loadImages(directoryHandle);
        return "New";
    } catch (error) {
        throw new Error("There was an issue with IndexedDB", error);
    }
}

async function _loadSavedDirectory() {
    // Try to retrieve directory handle from IndexedDB
    let directoryHandle = await idb.get('directory');

    // If retrieved, ask user if they would like to continue working on that directory or open a new one
    if (directoryHandle) {
        console.log(`Retrieved directory handle "${directoryHandle.name}" from IndexedDB.`);
        if (!await _verifyPermission(directoryHandle, true)) {
            return "Canceled";
        }
        await _loadImages(directoryHandle);
        currentIndex = await idb.get("index") - 1;
        return "Saved";
    } else {
        throw new Error("Previous directory not found");
    }
}

async function _loadImages(directoryHandle) {
    for await (const handle of directoryHandle.values()) {
        if (handle.kind === "file" && _isHandleImage(handle)) {
            fileHandles.push(handle);
        }
    }

    fileHandles.sort((a, b) => a.name.localeCompare(b.name));
}

function _isHandleImage(handle) {
    const permittedExtensions = ["apng", "png", "avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "svg", "webp"];
    const extension = handle.name.split(".").pop();
    return permittedExtensions.includes(extension);
}

async function _verifyPermission(handle, readWrite) {
    const options = {};
    if (readWrite) {
        options.mode = 'readwrite';
    }
    // Check if permission was already granted. If so, return true.
    if ((await handle.queryPermission(options)) === 'granted') {
        return true;
    }
    // Request permission. If the user grants permission, return true.
    if ((await handle.requestPermission(options)) === 'granted') {
        return true;
    }
    // The user didn't grant permission, so return false.
    return false;
}


/**
 * Retrieves the next image from the file handles.
 *
 * @async
 * @function
 * @returns {Promise<AppImage|undefined>} The next image object, or undefined if at the end.
 */
export async function getNextImage() {
    if (fileHandles.length === currentIndex + 1) return;

    currentIndex++;
    await _saveIndex(currentIndex);

    return _getCurrentImage();
}

/**
 * Retrieves the previous image from the file handles.
 * 
 * @async
 * @returns {Promise<AppImage|undefined>} The previous image object, or undefined if at the beginning.
 */
export async function getPreviousImage() {
    if (currentIndex - 1 < 0) return;

    currentIndex--;
    await _saveIndex(currentIndex);

    return _getCurrentImage();
}

/**
 * Asynchronously retrieves the current image as an application-specific image object.
 *
 * @async
 * @function
 * @returns {Promise<AppImage|undefined>} A promise that resolves to the current image object.
 */
async function _getCurrentImage() {
    if (currentIndex < 0 || currentIndex > fileHandles.length -1) return;
    const file = await fileHandles[currentIndex].getFile();
    return _getAppImageFromFile(file);
}

async function _getAppImageFromFile(file) {
    const imageURL = URL.createObjectURL(file);
    return new AppImage(file.name, imageURL);
}

/**
 * Retrieves the current application status.
 *
 * @returns {AppStatus} An instance of AppStatus representing the current index (1-based) and the total number of file handles.
 */
export function getStatus() {
    return new AppStatus(currentIndex + 1, fileHandles.length);
}

/**
 * Assigns a label to the current image and persists it in IndexedDB.
 *
 * If a label for the current image already exists, it will be updated.
 * Otherwise, a new label entry will be created.
 *
 * @async
 * @function
 * @param {string} label - The label to assign to the current image.
 * @returns {Promise<void>} Resolves when the label has been saved.
 */
export async function labelCurrentImage(label) {
    const currentImage = await _getCurrentImage();
    const imageLabel = new AppImageLabel(currentImage.name, label);

    // TODO: Use update directly, without needing to do a get first (check docs)
    const storedLabels = await idb.get("labels");
    if (storedLabels) {
        const existingIndex = _findImageLabelIndexByImageName(storedLabels, currentImage.name);
        if (existingIndex > -1) {
            storedLabels[existingIndex] = imageLabel;
        } else {
            storedLabels.push(imageLabel);
        }
        await idb.update("labels", () => storedLabels);
    } else {
        await idb.set("labels", [imageLabel]);
    }
}

function _findImageLabelIndexByImageName(imageLabelList, query) {
    return imageLabelList.findIndex((appImageLabel) => {
        return appImageLabel.imageName === query;
    });
}

/**
 * Retrieves the label assigned to the current image, if any.
 *
 * @async
 * @function
 * @returns {Promise<string>} The label for the current image, or an empty string if not found.
 */
export async function getCurrentLabel() {
    const storedLabels = await idb.get("labels");
    if (!storedLabels) return "";

    const currentImage = await _getCurrentImage();
    const existingIndex = _findImageLabelIndexByImageName(storedLabels, currentImage.name);
    if (existingIndex === -1) return "";

    return storedLabels[existingIndex].label;
}

export async function isPreviousWorskpaceAvailable() {
    const directoryHandle = await idb.get('directory');
    return !!directoryHandle;
}

function _saveIndex(index) {
    return idb.set("index", index)
}

export async function exportLabels() {
    const labels = await idb.get("labels");
    if (labels.length <= 0) throw new Error("No labels saved");

    let fileContent = "";
    labels.forEach(appImageLabel => {
        fileContent = fileContent.concat(`${appImageLabel.imageName}\t${appImageLabel.label}\n`);
    });

    await exportString(fileContent);    
}