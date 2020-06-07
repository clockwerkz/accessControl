const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/test', (req, res)=> {
    res.status(200).json({msg:"This is from the back end!"});
});

app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}...`);
})