import fs from 'fs';
import qr from 'qr-image';
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      message: "Type in Your URL",
      name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);

    qr_svg.pipe(fs.createWriteStream('myQr.png'));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
    })

  })
  .catch((error) => {
    if (error.isTtyError) {

    } else {
    }
  });