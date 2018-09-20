const getRepos = require('./getRepos');
const getPRs = require('./getPRs');

const getPRActivities = require('./getPRActivities');
const pageWorker = require('./pageWorker');
const {prettyJson} = require('./utility');
const createReposCollection = require('./collectionGenerator/createReposCollection');
const createPrCollectionsFrom = require('./collectionGenerator/createPrCollectionsFrom');


/*
{
  prId: {
    id: ...
  }
}
*/
const ActivitiesForPr = {};

/**
 *
General Steps

1. Populate Repos (createReposCollection)
2. Populate Prs for Repos
3. Populate Activities for Prs
4. Processing Activities for Users
 */



console.log('======================================================');
console.log('======================================================');
console.log('======================================================');
console.log('======================================================');
console.log('======================================================');
console.log('======================================================');
console.log('======================================================');

function thirdStep(prs) {
  console.log(prs);
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ GOING 3rd STEP!');
}

function secondStep(repos) {
  //console.log(repos);
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ GOING NEXT STEP!');
  createPrCollectionsFrom(repos, thirdStep);
}

function firstStep() {
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ FIRST STEP!');
  createReposCollection(secondStep);
}

firstStep();























