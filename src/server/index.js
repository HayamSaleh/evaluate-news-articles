var path = require('path')
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');

dotenv.config();

const PORT = process.env.PORT || 8081

const app = express();
app.use(cors());
app.use(express.static('dist'))
const API_KEY = process.env.API_KEY

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html') //production
  res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/article', async (req, res) => {
  const url = 'https://jamesclear.com/five-step-creative-process';
  const response =  await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`)
  try {
    const data = await response.json();
    res.send(data);
  } catch(e){
    console.error(e);
  }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})