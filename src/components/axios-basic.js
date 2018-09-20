// axios
let content = '';
axios.get('https://bitbucket.com/rest/api/1.0/users/achenwei/repos/adam-test-repo/last-modified?at=4b2c6e5fc2cdd9c8178492af15f05fcd8a2ec8b6')
.then(function (response) {
  console.log(response.data);
  //content = `${content}${JSON.stringify(response)}`;
})
.catch(function (error) {
  console.log(error);
});

console.log(content);
