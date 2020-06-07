const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

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