const express = require('express');
const app = express()
const port = 8080

app.use(express.static('web'))

app.get('/', (req, res) => res.send('EW'));

app.listen(8081);
