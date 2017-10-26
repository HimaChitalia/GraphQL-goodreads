const fetch = require('node-fetch')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)

fetch(
  'https://www.goodreads.com/author/show.xml?id=4432&key=noNqbhNjrDoKj9KB5OIUw'
)
.then(response => response.text())
.then(parseXML)
