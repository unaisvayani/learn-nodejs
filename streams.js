// Read and write large files

const fs = require("fs");

// create a readable stream
const readStream = fs.createReadStream("./docs/doc1.txt", "utf8");

// create a writable stream
const writeStream = fs.createWriteStream("./docs/doc2.txt");

readStream.on("data", (chunk) => {
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
