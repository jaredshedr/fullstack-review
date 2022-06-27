const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  username: String,
  forks: Number,
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (indvRepo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const newRepo = new Repo({id: indvRepo.id, name: indvRepo.name, username: indvRepo.owner.login, forks: indvRepo.forks, url: indvRepo.html_url})

  newRepo.save((err) => {
    if (err) {
      console.log('error saving repo', err);
    }
  })
}

let getTop = (callback) => {
  Repo.find().sort({forks: 'descending'}).limit(25).exec((err, results) => {
    if (err) {
      console.log('error reading all in getTop', err)
      callback(err, results)
    } else {
      // console.log(results)
      callback(null, results);
    }
  })
}

module.exports.save = save;
module.exports.getTop = getTop;