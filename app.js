import * as appService from "./appService.js";

const loadNewDirectoryButtonElement = document.getElementById("load-new-button");
loadNewDirectoryButtonElement.addEventListener("click", () => loadImages("New"));

const loadSavedDirectoryButtonElement = document.getElementById("load-saved-button");
loadSavedDirectoryButtonElement.addEventListener("click", () => loadImages("Saved"));

const nextImageButtonElement = document.getElementById("next-image-button");
nextImageButtonElement.addEventListener("click", showNextImage);

const previousImageButtonElement = document.getElementById("previous-image-button");
previousImageButtonElement.addEventListener("click", showPreviousImage);

const saveLabelButtonElement = document.getElementById("save-label-button");
saveLabelButtonElement.addEventListener("click", saveLabel);

const exportButtonElement = document.getElementById("export-button");
exportButtonElement.addEventListener("click", exportLabels);

const viewerElement = document.getElementById("viewer");
const imageElement = document.getElementById("image");
const imageNameElement = document.getElementById("image-name");

const progressContainerElement = document.getElementById("progress-container");
const progressBarElement = document.getElementById("progress-bar");

const labelInputElement = document.getElementById("label-input");

const landingElement = document.getElementById("landing");

/* LANDING FUNCTIONALITY */
appService.isPreviousWorskpaceAvailable().then((value) => {
    if (value) {
        loadNewDirectoryButtonElement.classList.remove("btn-primary");
        loadNewDirectoryButtonElement.classList.add("btn-outline-primary");
        loadSavedDirectoryButtonElement.classList.remove("d-none");
    }
});

/* APP FUNCTINOALITY */
function loadImages(loadAction) {
    loadNewDirectoryButtonElement.disabled = true;
    loadSavedDirectoryButtonElement.disabled = true;
    appService.loadDirectory(loadAction)
        .then((state) => {
            if (state === "Canceled") {
                loadNewDirectoryButtonElement.disabled = false;
                loadSavedDirectoryButtonElement.disabled = false;
                return;
            }
            landingElement.classList.add("d-none");
            viewerElement.classList.remove("d-none");
            _registerShortcuts();
            showNextImage();
        })
        .catch((error) => {
            console.error(error);
        });
}

async function showNextImage() {
    appService.getNextImage().then((image) => {
        if (image) {
            console.log("Showing next image");
            _updateUi(image);
        }
    });
}

async function showPreviousImage() {
    appService.getPreviousImage().then((image) => {
        if (image) {
            console.log("Showing previous image");
            _updateUi(image);
        }
    });
}

async function _updateUi(image) {
    imageElement.src = image.objectUrl;
    imageNameElement.textContent = image.name;
    labelInputElement.value = await appService.getCurrentLabel();
    labelInputElement.focus();
    _updateStatus();
}

function _updateStatus() {
    const status = appService.getStatus();

    progressContainerElement.setAttribute("aria-valuemin", "1");
    progressContainerElement.setAttribute("aria-valuemax", status.totalImages.toString());
    progressContainerElement.setAttribute("aria-valuenow", status.currentImageNumber.toString());

    progressBarElement.textContent = `${status.currentImageNumber}/${status.totalImages}`;
    progressBarElement.style = `width: ${status.completionPercentage}%`;

    nextImageButtonElement.disabled = !status.isNextImage;
    previousImageButtonElement.disabled = !status.isPreviousImage;
}

async function saveLabel() {
    const label = labelInputElement.value;
    await appService.labelCurrentImage(label);
    await showNextImage();
}

function exportLabels() {
    exportButtonElement.disabled = true;
    appService.exportLabels().then(() => {
        exportButtonElement.disabled = false;
    }).catch((error) => {
        alert(error);
        exportButtonElement.disabled = false;
    });
}

function _registerShortcuts() {
    window.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) return;
        if (event.repeat) return;

        switch (event.code) {
            case "NumpadEnter":
            case "Enter":
                saveLabel();
                event.preventDefault();
                break;

            case "ArrowLeft":
            case "KeyJ":
                if (event.altKey) {
                    showPreviousImage();
                    event.preventDefault();
                }
                break;

            case "ArrowRight":
            case "KeyL":
                if (event.altKey) {
                    showNextImage();
                    event.preventDefault();
                }
                break;

            default:
                return;
        }
    });
}