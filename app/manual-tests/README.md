# Tests

Following is a checklist with basic tests that need to be done before every release. This is manually checked for now.

---
## Order of execution
> [!IMPORTANT]
> When testing in desktop, use the UI via buttons *and* shortcuts

- **Desktop:** New folder → Export file → *New tab* → Existing folder → Export file
- **Mobile:** New folder → Export file → *New tab* → Existing folder → Export file

## Tests
### General
- [ ] The tests pass in desktop
- [ ] The tests pass in mobile

### New folder
- [ ] Can open a new folder.
- [ ] When opening a new folder, it loads the first image and there isn't an image before that one.
- [ ] **UI.** The previous image button should be disabled, and the progress bar should display the progress correctly.
- [ ] The next and previous image buttons work and properly go through all images without skipping any (forwards and backwards).
- [ ] **While going through all images**, make sure that no other type of file has been loaded and all images in different formats display correctly.
- [ ] **While going through all images**, don't label the first image, label the last image and randomly label the rest, save some labels empty and some with spaces.
- [ ] **UI.** When the final image is reached, the next image button should be disabled and the progress bar should be full.
- [ ] Use the forward or backward buttons to leave a random image as the current index (and take note of it) for the next batch of tests. (68.jpg (81, labeled))

### Existing folder
- [ ] Can open an existing folder
- [ ] When opening an existing folder, it loads the image where we left of previously. Not the previous one or the next one.
- [ ] **UI.** The progress bar should display the progress correctly.
- [ ] The next and previous image buttons work and properly go through all images without skipping any (forwards and backwards).
- [ ] **While going through all images**, make sure that the previously labeled images load the label correctly in the input field.
- [ ] **UI.** When the first image is reached, the previous image button should be disabled.
- [ ] **While going through all images**, label the first image, remove the label of the last image and randomly label the rest, save some labels empty and some with spaces.

### Export file
- [ ] After clicking the export button, a save file window should open prompting the user to save the file. In some browsers, it's just a download.
- [ ] The saved file should contain as many lines as images were loaded and two columns, separated by a `\tab`.
- [ ] The first column should contain the file name, including the extension; and the second column should contain the label if there's any, or be empty otherwise (the `\tab` will always be present).

### Shortcuts
- [ ] The enter key should save the current label, advance to the next image and *focus the label input*.
- [ ] `alt` + `→` should advance to the next image without saving, load the label in the label input if there is one saved for that image and focus on the input.
- [ ] `alt` + `←` should go back to the previous image, load the label in the label input if there is one saved for that image and focus on the input.