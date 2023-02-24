require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();


// Basic Configuration
// entweder environment Variable "PORT" nutzen oder 3000, wenn "PORT" nicht festgelegt wurde
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

const json = {
    oppId: '45643156d',
    contactId: '2',
    accId: '3',
    salutation: 'Herr',
    fName: 'Tobi',
    lName: 'Konrad',
    phone: '1234',
    email: 'test.konrad@hallogroup.de'
};

app.get('/', function (req, res) {
    res.json(json);
});

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
