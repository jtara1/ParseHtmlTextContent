# ParseHtmlTextContent
parse the textContent of all elements of the html text without having to create a DOM from the html

Uses regex to filter out text between & including chars: `<`, `>`
If the html text is has those characters encoded, this should
work smoothly; otherwise, it would parse the wrong values.
After parsing, it also decodes the html entities.
## Install

```bash
npm i -S
```

## Usage

```javascript
const parseTextContent = require('parse-html-text-content');

const htmlText = '<p>hello world</p>';
console.log(parseTextContent(htmlText)); // hello world
```
