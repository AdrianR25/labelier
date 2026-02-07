export default class AppStatus {
    /**
     * Creates an instance of AppStatus.
     * @param {number} currentImageNumber - The current image number being processed.
     * @param {number} totalImages - The total number of images to process.
     */
    constructor(currentImageNumber, totalImages) {
        this.currentImageNumber = currentImageNumber;
        this.totalImages = totalImages;
    }

    /**
     * Indicates if there is a next image available.
     * @type {boolean}
     * @readonly
     */
    get isNextImage() {
        return this.currentImageNumber < this.totalImages;
    }

    /**
     * Indicates if there is a previous image available.
     * @type {boolean}
     * @readonly
     */
    get isPreviousImage() {
        return this.currentImageNumber > 1;
    }

    /**
     * Returns the completion percentage of the image labeling process.
     * @type {number}
     * @readonly
     */
    get completionPercentage() {
        return this.currentImageNumber / this.totalImages * 100;
    }
}