const express = require('express'),
setStoreId = require('./utilities/setStoreId'),
request = require('request-promise'),
app = express();


app.get('/', (req, res, next) => {
  let client = req.query;
  client.storeId = setStoreId(client.zipcode);
  const options = {
    method: 'POST',
    uri: 'https://testing.free.beeceptor.com',
    body: client,
    json: true,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  request(options)
  .then( (response) => {
    console.log(response)
  })
  .catch( (err) => {
    console.log(err)
  })
  res.end()
});

app.listen(3000, () => console.log('listening on port 3000...'))