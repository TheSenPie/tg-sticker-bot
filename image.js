const Jimp = require("jimp");
const fs = require('fs');

// directory path
const dir = './images/';

const arr = fs.readdirSync(dir);

// list all files in the directory
fs.readdir(dir, (err, files) => {
  if (err) {
    throw err;
  }

  // files object contains all files names
  // log them on console
  files.forEach(file => {
    if (file.indexOf(".jpg") <= 0) {
      return;
    }

    const filename = file.substring(0, file.indexOf(".jpg"));

    //We will first read the JPG image using read() method. 
    Jimp.read(`images/${filename}.jpg`, function (err, image) {
      //If there is an error in reading the image, 
      //we will print the error in our terminal
      if (err) {
        console.log(err)
      }
      //Otherwise we convert the image into PNG format 
      //and save it inside images folder using write() method.
      else {
        let w = image.bitmap.width;
        let h = image.bitmap.height;
        const ratio = w / h;
        if (ratio >= 1) {
          w = 512;
          h = w * (1 / ratio);
        } else {
          h = 512;
          w = h * ratio;
        }
        // TO DO: add procedure to lower image quality to 512kb
        image
          .resize(w, h, Jimp.RESIZE_BEZIER, function (err) {
            if (err) throw err;
          })
          .write(`processed/${filename}.png`);
      }
    });
  });
});