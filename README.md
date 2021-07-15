# ParseHtmlTextContent

## Deprecated

While there are use cases where this is necessary, they are very low impact use cases.

Ideally, your html parsing library should suffice for getting the inner text.

## About 

parse the textContent of all elements of the html text without having to create a DOM from the html

Uses regex to filter out text between & including chars: `<`, `>`
If the html text is has those characters encoded, this should
work smoothly; otherwise, it would parse the wrong values.
After parsing, it also decodes the html entities.
## Install

```bash
npm i -S parse-html-text-content
```

## Usage

```javascript
const parseTextContent = require('parse-html-text-content');

const htmlText = '<p>hello world</p>';
console.log(parseTextContent(htmlText)); // hello world
```
