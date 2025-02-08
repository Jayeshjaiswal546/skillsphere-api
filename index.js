const express = require('express');
const router = require('./App/routes');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve the 'uploads' folder
app.use(router);



app.listen(PORT,()=>{
    console.log("Server is listening at port: 8000");
});