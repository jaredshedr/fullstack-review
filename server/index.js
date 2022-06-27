const express = require('express');
let app = express();
let git = require('../helpers/github.js');
let db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());



app.post('/repos', function (req, res) {
  // TODO - your code here!
  git.getReposByUsername(req.body.username, (err, repos) => {
    if (err) {
      console.log('in get repos by username - server side', err)
    } else {
      repos.forEach((item) => {
        db.save(item);
      })
      res.status(201).send('sueccesful post');
    }
  });
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getTop((err, results) => {
    if (err) {
      console.log('error getting top 25', err)
    } else {
      res.status(200).send(results)
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
