require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());

// mongodb
const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.eriw8fe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,

    strict: true,

    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    const UsersDB = client.db("recipe_app").collection("users");
    const RecipeDB = client.db("recipe_app").collection("recipes");

    // All recipes related apis
    app.get("/recipes", async (req, res) => {
      const result = await RecipeDB.find().sort({ _id: -1 }).toArray();
      res.send(result);
    });

    app.get("/topRecipes", async (req, res) => {
      const result = await RecipeDB.find().sort({likeCount: -1}).limit(6).toArray();
      res.send(result);
    })

    app.post("/recipes", async (req, res) => {
      const recipeDetails = req.body;
      const result = await RecipeDB.insertOne(recipeDetails);
      res.send(result);
    });

    app.patch("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const {likeCount} = req.body;
      const query = {_id: new ObjectId(id)};
      const updatedDoc = {
        $inc: { likeCount: 1 }
      }
      const result = await RecipeDB.updateOne(query, updatedDoc);
      res.send(result);
    })


// my recipes related api
    app.get("/myRecipes", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await RecipeDB.find(query).toArray();
      res.send(result);
    });
    app.put("/myRecipes/:id", async (req, res) => {
      const id = req.params.id;
      const {image, title, ingredients, instructions, cuisineType, preparationTime, category, email, likeCount} = req.body;
      const query = { _id: new ObjectId(id) };
      const replacement = {
        image:image, title:title, ingredients:ingredients, instructions:instructions, cuisineType:cuisineType, preparationTime:preparationTime, category:category, email: email,
        likeCount: likeCount
      }
      const result = await RecipeDB.replaceOne(query, replacement);
      res.send(result);
    });
    app.delete("/myRecipes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await RecipeDB.deleteOne(query);
      res.send(result);
    });

    // user related apis
    app.post("/users", async (req, res) => {
      const userProfile = req.body;
      const result = await UsersDB.insertOne(userProfile);
      res.send(result);
    });
    app.patch("/users", async (req, res) => {
      const {email, lastSignInTime} = req.body;
      const filter = {email: email};
      const updatedDoc =  {
        $set: {
          lastSignInTime: lastSignInTime
        }
      }
      const result = await UsersDB.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // await client.connect();

    // Send a ping to confirm a successful connection

    // await client.db("admin").command({ ping: 1 });

    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

// port listening
app.listen(port);
