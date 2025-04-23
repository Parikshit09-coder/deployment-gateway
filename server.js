const express = require('express')
const proxy = require ('express-http-proxy')
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;



app.use('/node_server', proxy(process.env.NODE_URL));
app.use('/RAG_server', proxy(process.env.RAG_URL));


app.listen(PORT, "0.0.0.0",() => {
    console.log(`Server is running on port ${PORT}`);
})
