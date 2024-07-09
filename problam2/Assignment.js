const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
const operation = args[0];
const file = args[1];
const content = args.slice(2).join(' ');

// Function to read a file
const readFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file: ${err}`);
    } else {
      console.log(data);
    }
  });
};

// Function to delete a file
const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(`Error deleting file: ${err}`);
    } else {
      console.log(`File '${filePath}' deleted`);
    }
  });
};

// Function to create a file
const createFile = (filePath) => {
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.log(`Error creating file: ${err}`);
    } else {
      console.log(`File '${filePath}' created`);
    }
  });
};

// Function to append content to a file
const appendToFile = (filePath, content) => {
  fs.appendFile(filePath, `${content}\n`, (err) => {
    if (err) {
      console.log(`Error appending to file: ${err}`);
    } else {
      console.log(`Content appended to the file '${filePath}'`);
    }
  });
};

// Function to rename a file
const renameFile = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.log(`Error renaming file: ${err}`);
    } else {
      console.log(`File '${oldPath}' renamed to '${newPath}'`);
    }
  });
};

// Function to list contents of a directory
const listDirectory = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.log(`Error listing directory: ${err}`);
    } else {
      files.forEach(file => {
        console.log(file);
      });
    }
  });
};

// Perform the appropriate operation based on the command line arguments
switch (operation) {
  case 'read':
    if (!file) {
      console.log("Please provide a file to read.");
    } else {
      readFile(file);
    }
    break;

  case 'delete':
    if (!file) {
      console.log("Please provide a file to delete.");
    } else {
      deleteFile(file);
    }
    break;

  case 'create':
    if (!file) {
      console.log("Please provide a file to create.");
    } else {
      createFile(file);
    }
    break;

  case 'append':
    if (!file || !content) {
      console.log("Please provide a file and content to append.");
    } else {
      appendToFile(file, content);
    }
    break;

  case 'rename':
    const newFile = args[2];
    if (!file || !newFile) {
      console.log("Please provide the current and new file names.");
    } else {
      renameFile(file, newFile);
    }
    break;

  case 'list':
    if (!file) {
      console.log("Please provide a directory to list.");
    } else {
      listDirectory(file);
    }
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
    break;
}
