const axios = require('axios');
const http = require('http');

const server = http.createServer(function(req, res) {
        // console.log(req);   // debug dump the request

        // If they pass in a basic auth credential it'll be in a header called "Authorization" (note NodeJS lowercases the names of headers in its request object)

        const auth = req.headers['authorization'];  // auth is in base64(username:password)  so we need to decode the base64
        console.log("Authorization Header is: ", auth);

        if(!auth) {     // No Authorization header was passed in so it's the first time the browser hit us

                // Sending a 401 will require authentication, we need to send the 'WWW-Authenticate' to tell them the sort of authentication to use
                // Basic auth is quite literally the easiest and least secure, it simply gives back  base64( username + ":" + password ) from the browser
                res.statusCode = 401;
                res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');

                res.end('<html><body>Need some creds son</body></html>');
        }

        else if(auth) {    // The Authorization was passed in so now we validate it

                const tmp = auth.split(' ');   // Split on a space, the original auth looks like  "Basic Y2hhcmxlczoxMjM0NQ==" and we need the 2nd part

                const buf = new Buffer(tmp[1], 'base64'); // create a buffer and tell it the data coming in is base64
                const plain_auth = buf.toString();        // read it back out as a string

                console.log("Decoded Authorization ", plain_auth);

                // At this point plain_auth = "username:password"

                const creds = plain_auth.split(':');      // split on a ':'
                const username = creds[0];
                const password = creds[1];

                if((username == 'hack') && (password == 'thegibson')) {   // Is the username/password correct?

                        res.statusCode = 200;  // OK
                        res.end('<html><body>Congratulations you just hax0rd teh Gibson!</body></html>');
                }
                else {
                        res.statusCode = 401; // Force them to retry authentication
                        res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');

                        // res.statusCode = 403;   // or alternatively just reject them altogether with a 403 Forbidden

                        res.end('<html><body>You shall not pass</body></html>');
                }
        }
});


server.listen(5000, function() { console.log("Server Listening on http://localhost:5000/"); });
