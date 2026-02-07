export async function exportString(text) {
    const fileHandle = await _getNewFileHandle();
    await _writeFile(fileHandle, text);
} 

async function _getNewFileHandle() {
  const options = {
    types: [
      {
        description: 'Text File',
        accept: {
          'text/plain': ['.txt'],
        },
      },
    ],
  };
  const handle = await window.showSaveFilePicker(options);
  return handle;
}

async function _writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(contents);
  // Close the file and write the contents to disk.
  await writable.close();
}