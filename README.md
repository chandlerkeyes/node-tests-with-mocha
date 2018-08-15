"# node-tests-with-mocha"
Setting Up Mocha
Note: Make sure Node version 6 or more is installed.
Make sure nodemon is installed.

Create package.json
run npm init

Installing Mocha
Install Mocha as a development dependency:
npm install --save-dev mocha

Set up your script in package,json
{
  "name": "tests",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha **/**.test.js",
    "test-watch": "nodemon --exec \"npm test\""
  }
Under scripts, you can add your script name and command.
For windows, you must use double quotes around the "\"

Making & Running tests
Make utils directory
mkdir utils
cd utils

Add a new file called utills.js and utils.test.js
utils.js will contain your methods and utils.test.js will contain your tests.

Running tests
npm run test-watch

Your tests will re-run every time you save a change

Important Modules
supertest is used to test the http requests
expect is used to get methods like toExist() or toBe(). They help test the properties of a value.  
