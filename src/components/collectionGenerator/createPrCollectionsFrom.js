const getRepos = require('./../getRepos');
const getPrs = require('./../getPrs');

const getPRActivities = require('./../getPRActivities');
const pageWorker = require('./../pageWorker');
const {prettyJson} = require('./../utility');

function populatePrs(start = 0, pushItem, nextStep, repo, PrsForRepos) {
  if (!start) {
    console.log('processing populatePrs....');
  }
  //tester
  let c = start === 27;

  const {
    repoName: name,
    projectKey,
  } = repo;
  console.log(repo);
  console.log(projectKey);
  console.log('************');
  getPrs(start, repo.name, repo.projectKey)
  .then((response) => {

    const data = response.data;
    const prs = data.values;
    const isLastPage = data.isLastPage;
    const nextPageStart = data.nextPageStart;
    processFoundPrs(prs, pushItem);

    //TODO - for now disable looping
    //!isLastPage
    if (c) {
      populatePrs(nextPageStart, pushItem, nextStep, repo, PrsForRepos);
    } else {
      console.log('it is the last page');
      console.log('go to next step!');

      //initiate step 2
      nextStep(PrsForRepos);
    }
  })
  .catch((error) => {
    console.log('something went wrong inside get prs...');
    console.log(error);
    console.log(new Error().stack);
    console.log(`
    additional debugging info
      start ${start}
    `)
  });
}

function processFoundPrs(prs, pushItem) {
  //console.log(pushItem);
  if (prs && prs.length) {
    prs.forEach((repo, index) => {
      // console.log(repo.name);
      // console.log('before push....');
      pushItem(pr);
    });
  }
}

module.exports = function createPrCollectionsFrom(repos, nextStep) {
  console.log('start createPrCollectionsFrom repos.... ');
  console.log(`${nextStep}`);
  /*
  prsForRepos
  {
    'repo-name': [
      {
        prId:...
      },
    ]
  }
  */
  const PrsForRepos = {};
  function pushItem (item) {
    if (!item.repoName) {
      throw Error (`Repo Name is Not Found!
       Detail:
       item: ${item}
      `);
      return;
    }
    if (!PrsForRepos[item.repoName]) {
      PrsForRepos[item.repoName] = [];
      const pr = {
        [item.repoName]: item.prsList,
      };
    }
    PrsForRepos[item.repoName].push(pr);

    return true;
  }

  repos.forEach((repo) => {
    populatePrs(0, pushItem, nextStep, repo, PrsForRepos);
  });
}