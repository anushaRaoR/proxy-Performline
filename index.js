const express = require('express')
var app = express();
const request = require('request');
const axios = require('axios');

const apiUrl = "https://api.performline.com"

const api = axios.create({
  baseURL: 'https://api.performline.com',
  headers: {
              'Authorization' : 'Token 8a26bba7614feb3987ddfec7c6d31755ae5d7c47'
            }
});

function callback(error, response, body) {
  console.log(JSON.parse(response));
  console.log("RESPONSE CODE " + response.statusCode );
  if (!error && response.statusCode == 200) {
    console.log(" Success " + JSON.parse(repsonse.data));
    res.json(response.data);
  }
  else {
    console.log("ERROR " + JSON.parse(error));
  }
}

app.get('/common/brands/',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    api.get('/common/brands/').then((response)=>{
      res.json(response.data);
    })
    .catch((err)=>{
      console.log(err);
      res.statusCode = 500;
      res.json(err);
    })
});
app.get('/web/pages/:id',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(req.params.id);
    api.get('/web/pages/'+req.params.id+"/").then((response)=>{
      res.json(response.data);
    })
    .catch((err)=>{
      console.log(err);
      res.statusCode = 500;
      res.json(err);
    })
});

app.get('/web/pages/',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const campaign = req.query.campaign > 0 ? "&campaign="+req.query.campaign : "";
    api.get('/web/pages/?brand='+req.query.brand+campaign).then((response)=>{
      res.json(response.data);
    })
    .catch((err)=>{
      console.log(err);
      res.statusCode = 500;
      res.json(err);
    })
});

app.get('/common/campaigns/',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    api.get('/common/campaigns/?brand='+req.query.brand).then((response)=>{
      res.json(response.data);
    })
    .catch((err)=>{
      console.log(err);
      res.statusCode = 500;
      res.json(err);
    })
});


app.listen(3001, () => console.log('Example app listening on port 3000!'))
