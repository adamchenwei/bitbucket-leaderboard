const getRepos = require('./../getRepos');
//const getPRs = require('./../getPRs');

const getPRActivities = require('./../getPRActivities');
const pageWorker = require('./../pageWorker');
const {prettyJson} = require('./../utility');

function populateReposInstance(start = 0, pushItem, nextStep, Repos) {
  if (!start) {
    console.log('processing....');
  }

  console.log(start);
  console.log(typeof start);

  //tester
  let c = start === 27;

  getRepos(start)
  .then((response) => {
    const data = response.data;
    const repos = data.values;
    const isLastPage = data.isLastPage;
    const nextPageStart = data.nextPageStart;
    processFoundRepos(repos, pushItem);

    //TODO - for now disable looping

    //tester trigger
    //!isLastPage
    if (!c) {
      populateReposInstance(nextPageStart, pushItem, nextStep, Repos);
    } else {
      console.log('it is the last page');
      console.log('go to next step!');

      //initiate step 2
      nextStep(Repos);
    }

  })
  .catch((error) => {
    console.log('something went wrong inside get repos...');
    console.log(error);
    console.log(new Error().stack);
    console.log(`
    additional debugging info
      start ${start}
    `)
  });
}

function processFoundRepos(repos, pushItem) {
  //console.log(pushItem);
  if (repos && repos.length) {
    repos.forEach((repo, index) => {
      // console.log(repo.name);
      // console.log('before push....');
      pushItem({
        name: repo.name,
        projectKey: repo.project.key,
      });
    });
  }
}

module.exports = function createReposCollection(nextStep) {
  console.log('entry');
  console.log(`${nextStep}`);
  /*
    [
      name: 'repo-name',
      projectKey: 'AIR',
    ]
  */
  let Repos = [];
  function pushItem (item) {
    Repos.push({
      name: item.name,
      projectKey: item.projectKey,
    });
  }
  populateReposInstance(0, pushItem, nextStep, Repos);
}