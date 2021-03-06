function makeRequest (opts) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    var params = opts.params;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
    xhr.send(params);
  });
}

// Headers and params are optional
makeRequest({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/posts/1'
})
.then(function (datums) {
  console.log(datums);
  // return makeRequest({
  //   method: 'POST',
  //   url: datums.url,
  //   params: {
  //     score: 9001
  //   },
  //   headers: {
  //     'X-Subliminal-Message': 'Upvote-this-answer'
  //   }
  // });
})
.catch(function (err) {
  console.error('Augh, there was an error!', err);
});





// function reqListener () {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
// oReq.send();