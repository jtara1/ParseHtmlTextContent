const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

/**
 *
 * @param htmlText
 * @param opts
 * @param opts.lineFilterFuncs
 * @param opts.flatten
 * @returns {*}
 */
module.exports = function parseTextContent(
  htmlText,
  opts = { lineFilterFuncs: [], flatten: false })
{
  if (!htmlText) return '';

  // parse out html tags that contain textContent that is embedded src code or css
  htmlText = htmlText.replace(/<head[\s\S]*?>[\s\S]*?<\/head>/ig, '');
  htmlText = htmlText.replace(/<(?:no)?script>[\s\S]*?<\/(?:no)?script>/g, '');
  htmlText = htmlText.replace(/<style.*?>[\s\S]*?<\/style>/g, '');
  htmlText = htmlText.replace(/<[\s\S]*?>/g, ' ');

  // parse out bulky whitespace chars
  htmlText = filterOutBulkyWhitespace(htmlText);
  htmlText = entities.decode(htmlText); // some entities are whitespace chars
  htmlText = filterOutBulkyWhitespace(htmlText);

  return htmlText;
};

function filterOutBulkyWhitespace(htmlText) {
  htmlText = htmlText.replace(/\n{2,}/g, '\n');
  htmlText = htmlText.replace(/ {2,}/g, ' ');
  htmlText = htmlText.replace(/\s{2,}/g, '\n');

  return htmlText;
}
