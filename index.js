const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000 || process.env.PORT;
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors());


// mongodb

// port listening
app.listen(port);