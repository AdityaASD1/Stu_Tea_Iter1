const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle a custom route for the "hello world" click event
app.get('/goodbye', async (req, res) => {
    try {
        // Connect to MongoDB
        await client.connect();

        // Access your desired database and collection
        const database = client.db('StuTea');
        const collection = database.collection('Iter1');

        // Perform a find operation (fetch all documents in the collection)
        const documents = await collection.find().toArray();

        // Send the fetched data as a response
        res.json(documents);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// password : AdityA%40369



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://deshmukhaditya:AdityA%40369@cluster0.pqlmwvz.mongodb.net/?retryWrites=true&w=majority";

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
    await client.close();
  }
}
run().catch(console.dir);
