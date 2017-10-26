CReate a git repo with node and npm licence
clone it
Added serve.js file
required const express
`npm init` to create package.json file ---1
will ask few questions at this time - press enter
WIll ask Is this ok? (yes) - type yes
// ♥npm install --save express - to install express
node serve.js - should print listening.. ---2
require `express-graphql`
npm install graphql and express-graphql ---3
run node server with `node serve.js` command
You will see a schema error ---4
define a schema in app.use in serve.js document
explain schema - where do we get schema and what is it?
check with postman
xml2js - it is an npm module
and parseString is a method of xml2js
xml2js returns callback not promise. SO, you need  to require util to return a promise
install - // ♥npm install --save xml2js ---5
define new AuthorType and GraphQLSchema
install node-fetch with command `npm install node-fetch-npm --save` ---6
