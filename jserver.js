// VITAL STEP ONE : load necessary (http) module/modules
let http = require ('http');

const PORTOne = 8080;

const PORTTwo = 9999;

// VITAL STEP FOUR (in part): set the handler/handlers
function handleRequest (req, res) {
    res.end("Here's your response. It's working. " + req.url);
}

function handleRequestX (req, res) {
    res.end("Here's your response. It's working on this port, too. " + req.url);
    process.exit(0);
}

// VITAL STEP TWO : declare the server
// VITAL STEP FOUR (in part): set the handler/handlers
const serverOne = http.createServer(handleRequest);

const serverTwo = http.createServer(handleRequestX);

// VITAL STEP THREE: set the listener
serverOne.listen (PORTOne, function () {
    console.log("server now listening on port: " + PORTOne);
})

serverTwo.listen (PORTTwo, function () {
    console.log("server now listening on port: " + PORTTwo);
})