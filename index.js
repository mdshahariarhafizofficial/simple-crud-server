const express = require('express');
const {MongoClient, ServerApiVersion} = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;



// Middleware
app.use(cors());
app.use(express.json())

// Db info
// user: simpleDbUser
// Pass: CBNP4kmhFG4fpNd9
const uri = "mongodb+srv://simpleDbUser:CBNP4kmhFG4fpNd9@cluster0.fkarqx9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try{
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }finally{

    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hlw Dev');
} );

app.listen(port, () => {
    console.log(`Application running in Port : ${port}`);
    
} )