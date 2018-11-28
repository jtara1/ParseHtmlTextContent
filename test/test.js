const assert = require('assert');
const { join } = require('path');

const loadHtmlTexts = require('./utils');
const parseInnerText = require('../index');

let htmlTexts = [];

before(async function() {
  htmlTexts = await loadHtmlTexts(join(__dirname, 'html'));
});

describe('get the inner text of the html texts', () => {
  it('should only include the readable text', function() {
    this.timeout(15000);

    htmlTexts.map(html => {
      const textContent = parseInnerText(html);
      console.log(textContent);
      assert(!!textContent);
    })
  });
});
