const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://toys:CISXvktUyAagLWCz@cluster0.n1ihip4.mongodb.net/?retryWrites=true&w=majority";

/// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
    // ,
    
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   maxPoolSize: 10,
    
  });
  
  async function run() {
    try {
      client.connect();
      // Connect the client to the server	(optional starting in v4.7)
      // client.connect((err) =>{
      //   if (err) {
      //     console.error(err);
      //     return;
      //   }
      // });
  
      //database operations
      const toysCollection = client.db('toys').collection('toysCollections');
  
      app.post('/toys', async (req, res) => {
        const newToys = req.body;
        //console.log(newCoffee);
        const result = await toysCollection.insertOne(newToys);
        res.send(result);
      })
  
      app.get('/allToys', async (req, res) => {
        const cursor = toysCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      })
      app.get('/allToys/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const result = await toysCollection.findOne(query)
        res.send(result);
      })
  
      // my toys
     
      try {
        const result = await toysCollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error('Error searching for documents:', error);
        res.status(500).send('Internal Server Error'); 
      }
    });
  
    //api http://localhost:5000/search?query=
  
    
  
  
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
    }
  }
  run().catch(console.dir);
  
  
  
  
  app.get('/', (req, res) => {
    res.send('Toys server is running')
  })
  
  app.listen(port, () => {
    console.log(`Toys server is running on port ${port}`)
  })