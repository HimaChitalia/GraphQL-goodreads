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
util.promisify error ---a
install util.promisify with the command `npm install util.promisify` --7
required `require('util.promisify').shim()` in schema.js to make util.promisify work
Now if start node server with command `node serve.js`, you should see graphQL server --8
AT this point, if we run the query, author will be null because we need to put our fetch request in resolver when we export module --8
Add resolve in to `AuthorType`, so that GraphQL server would actually know which is the name property from xml document
run server and see result --9
