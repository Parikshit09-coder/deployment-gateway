const express = require('express')
const proxy = require ('express-http-proxy')
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;



app.use('/node_server', proxy('https://deployment-production-4d20.up.railway.app'));
app.use('/RAG_server', proxy('https://medpass-rag.onrender.com'));


app.listen(PORT, "0.0.0.0",() => {
    console.log(`Server is running on port ${PORT}`);
})
