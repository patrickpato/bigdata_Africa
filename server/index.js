const express  = require("express"); 
const app = express();
const cors = require("cors"); 
const pool = require("./database")
//setting up middleware
app.use(cors());
app.use(express.json());

//DEVELOPING ROUTES
//FETCHING ALL DATA
app.get("/sentiments", async(req, res) => {
    try {
        const allSentiments = await pool.query("SELECT * FROM general_tweets_inferences");
        res.json(allSentiments.rows)
        
    } catch (err) {
        
        console.error(err.message)
    }
})
app.get("/metadata", async(req, res) => {
    try{
        const metadata = await pool.query("SELECT * FROM metadatainfo ORDER BY id DESC LIMIT 1");
        res.json(metadata.rows)
    } catch (err){
        console.error(err.message)
    }
})

app.listen(5000, () =>{
    console.log("Server running on port 5000");
})