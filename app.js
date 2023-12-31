const express = require('express');
const app = express();
const PORT = 8000;
const path = require("path");

app.use(express.static("public", {type:'module'}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(PORT, () => {
    console.log("Server running at http://localhost:8000")
})