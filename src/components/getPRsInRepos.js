const getRepos = require('./getRepos');
const getPRs = require('./getPRs');

const getPRActivities = require('./getPRActivities');
const pageWorker = require('./pageWorker');
const {prettyJson} = require('./utility');

getRepos
.then((response) => {
  const list = response.data.values;
  if (list && list.length) {
    list.forEach((repo, index) => {
      const slug = repo.slug;
      getPRs(slug)
      .then((PRsCollection) => {
        console.log('PRsCollection BEG');
        console.log(prettyJson(PRsCollection.data.values[0]));
        console.log('PRsCollection END');
      })
      .catch((error) => {
        console.log('PRsCollection ERROR BEG');
        console.log(prettyJson(error));
        console.log('PRsCollection ERROR END');
      });
    });
  }
})
.catch((error) => {
  console.log('ERROR');
  console.log(prettyJson(error));
  console.log('ERROR END-2----');
});
