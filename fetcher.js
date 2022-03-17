const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

let URL = args[0];
let path = args[1];

request(URL, (error, response, body) => {
  if (error) throw error;
  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
})
