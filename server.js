const express = require('express');

const app = express();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const PORT = process.env.PORT || 5000;

// Set up Auth0 configuration
const authConfig = {
    domain: "YOUR_DOMAIN",
    audience: "YOUR_API_IDENTIFIER"
};

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-64n7s4br.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:5000/',
  issuer: 'https://dev-64n7s4br.auth0.com/',
  algorithms: ['RS256']
});




app.get("/api/external", checkJwt, (req, res) => {
    const userID = req.user['http://localhost:5000/email']
    console.log('route hit', userID);
    res.send({
      msg: "Your Access Token was successfully validated!"
    });
});


app.get('/test', (req, res)=> {
    console.log('route hit');
    msg = {
        msg: "This is from the back end!"
    }
    return res.status(200).json(msg);
});
app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}...`);
})