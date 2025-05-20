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
const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}}@cluster0.eriw8fe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {

  serverApi: {

    version: ServerApiVersion.v1,

    strict: true,

    deprecationErrors: true,

  }

});

async function run() {

  try {

    // Connect the client to the server	(optional starting in v4.7)

    await client.connect();

    // Send a ping to confirm a successful connection

    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } finally {

    // Ensures that the client will close when you finish/error

    // await client.close();

  }

}

run().catch(console.dir);

// port listening
app.listen(port);