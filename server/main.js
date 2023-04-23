const express  = require("express"); 
const app = express();
const cors = require("cors"); 
const pool = require("./database")
const tf = require("@tensorflow/tfjs")

//setting up middleware
app.use(cors());
app.use(express.json());



const model = tf.loadLayersModel("tomato_detection_model-main\model.json")