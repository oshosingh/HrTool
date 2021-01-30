const express = require('express');
const path = require('path')
const cors = require('cors')
const router = require('./api/router')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000;

app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/api/', router)

app.listen(PORT, () => console.log(`server started at ${PORT}`));