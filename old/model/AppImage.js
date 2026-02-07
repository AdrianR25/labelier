/**
 * Represents an image in the application.
 * @class
 */
export default class AppImage {
    /**
     * Creates an instance of AppImage.
     * @param {string} name - The name of the image.
     * @param {string} objectUrl - The object URL of the image.
     */
    constructor(name, objectUrl) {
        this.name = name;
        this.objectUrl = objectUrl;
    }
}