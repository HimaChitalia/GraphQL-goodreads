const fetch = require('node-fetch')

fetch(
  'https://www.goodreads.com/author/show.xml?id=4432&key=noNqbhNjrDoKj9KB5OIUw'
)
.then(response => response.text())