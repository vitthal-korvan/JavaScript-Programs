function printFileExtension(filename) {
    const extension = filename.split(".")[1];
    console.log(extension);
}

const filename = prompt("Enter a filename:");
printFileExtension(filename);
