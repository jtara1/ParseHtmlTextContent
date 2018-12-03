const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

module.exports = function parseTextContent(htmlText) {
  if (!htmlText) return '';
  
  // parse out html tags that contain textContent that is embedded src code or css
  htmlText = htmlText.replace(/<head[\s\S]*>[\s\S]*<\/head>/ig, '');
  htmlText = htmlText.replace(/<(?:no)?script>[\s\S]*?<\/(?:no)?script>/g, '');
  htmlText = htmlText.replace(/<[\s\S]*?>/g, ' ');

  // parse out bulky whitespace chars
  htmlText = htmlText.replace(/\n{2,}/g, '\n');
  htmlText = htmlText.replace(/ {2,}/g, ' ');
  htmlText = htmlText.replace(/\s{2,}/g, '\n');

  htmlText = entities.decode(htmlText);
  return htmlText;
};
