function populatePrsForRepos(repos) {

  }


  function getPrsInstance(slug = '', projectKey = '', startIndex = 0) {
    if (!startIndex) {
      console.log(`get PRs from ${slug}....
      more info:
      projectKey: ${projectKey}
      `);
    }

    getPRs(slug, projectKey, startIndex)
    .then((PRsCollection) => {
      const data = PRsCollection.data;
      const list = data.values;
      const isLastPage = data.isLastPage;
      const nextPageStart = data.nextPageStart;
      const prs = data.values;
      const prId = data.id;
      console.log(`prs ${prettyJson(prs)}`);
      // processFoundPrs(list, start);
      // if (!isLastPage) {
      //   getPrsInstance(nextPageStart);
      // } else {
      //   console.log(`${slug} pr processing completed....`);
      // }

    })
    .catch((error) => {
      console.log('something went wrong when get prs...');
      console.log(prettyJson(error));
      console.log(`
      additional debugging info
        index: ${index}
        repo name: ${repo.name}
        repo properties: ${prettyJson(repo)}
      `)
    });
  }

  function processFoundPrs(list) {
    if (list && list.length) {
      list.forEach((pr, index) => {
        console.log('------pr');
        console.log(prettyJson(pr));
        //getPRActivities(pr.Id);
        if (!isLastPage) {
          processFoundPrs(nextPageStart);
        } else {
          console.log('completed!');
        }
      });
    }
  }

