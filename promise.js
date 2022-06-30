const urls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/todos/1'
]

Promise.allSettled(urls.map(url => fetch(url))).then(results => {
  results.forEach(result => {
    if (result.status === "fulfilled") {
      console.log(result.value);
    }
    if (result.status === "rejected") {
      console.log(result.reason);
    }
  })
})