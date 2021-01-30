const express = require('express');
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 5000;

app = express();
app.use(cors());

app.get('/api/user', (req, res) => {
    var obj = [
        {name: 'alpha', surname: 'beta'},
        {name: 'beta', surname: 'alpha'}
    ]
    res.json(obj);
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));