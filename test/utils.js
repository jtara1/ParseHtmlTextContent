const glob = require('glob');
const path = require('path');
const fs = require('fs');

module.exports = async function loadHtmlText(dir) {
  return new Promise((resolve, reject) => {
    glob(path.join(dir, '*.html'), null, (err, files) => {
      if (err) return reject(err);

      resolve(files.map(file =>
        fs.readFileSync(file, 'utf-8')));
    });
  });
};
