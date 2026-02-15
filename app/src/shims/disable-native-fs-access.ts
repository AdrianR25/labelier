(() => {

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;

    if ('showOpenFilePicker' in self) delete self.showOpenFilePicker;
    if ('showSaveFilePicker' in self) delete self.showSaveFilePicker;
    if ('showDirectoryPicker' in self) delete self.showDirectoryPicker;
})();