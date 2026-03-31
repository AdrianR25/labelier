# Tests

Following is a checklist with basic tests that need to be done before every release. This is manually checked for now.

**General**
- [ ] The tests pass in desktop
- [ ] The tests pass in mobile

**New folder**
- [ ] Can open a new folder.
- [ ] When opening a new folder, it loads the first image and there isn't an image before that one.
- [ ] **UI.** The previous image button should be disabled, and the progress bar should display the number of images correctly.
- [ ] The next and previous image buttons work and properly go through all images without skipping any (forwards and backwards).
- [ ] **While going through all images**, make sure that no other type of file has been loaded and all images in different formats display correctly.
- [ ] **While going through all images**, don't label the first image, label the last image and randomly label the rest, save some labels empty and some with spaces.
- [ ] When the final image is reached, the next image button should be disabled and the progress bar should be full.

**Export file**
- [ ] After clicking the export button, a save file window should open prompting the user to save the file.
- [ ] The saved file should contain as many lines as images were loaded and two columns, separated by a `\tab`.
- [ ] The first column should contain the file name, including the extension; and the second column should contain the label if there's any, or be empty otherwise (the `\tab` will always be present).

**Shortcuts**
- [ ] The enter key should save the current label, advance to the next image and *focus the label input*.
- [ ] `alt` + `→` should advance to the next image without saving, load the label in the label input if there is one saved for that image and focus on the input.
- [ ] `alt` + `←` should go back to the previous image, load the label in the label input if there is one saved for that image and focus on the input.