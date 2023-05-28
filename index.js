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