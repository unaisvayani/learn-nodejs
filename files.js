const fs = require("fs");

const filePath = "./file1.txt";

// creating file
if (!fs.existsSync(filePath)) {
  fs.writeFile(filePath, "Hello, world!", () => {
    console.log("file is written");
  });
}

// reading files
if (fs.existsSync(filePath)) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
    }
  });
}

// deleting files
if (fs.existsSync(filePath)) {
  fs.unlink(filePath, () => {
    console.log("file is deleted");
  });
}
