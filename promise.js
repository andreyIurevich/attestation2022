/*
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

const response = {
  users: [
    {
      id: 1,
      name: 'Ann',
      age: 23,
    }
  ]
}
*/
class Person {
  #age = 20;

  #displayName() {
    console.log('-> Name');
  }

  displayName() {
    console.log('-> Name: Andrey')
  }

  print() {
    this.#displayName()
  }

  printAge() {
    console.log('-> age: ', this.#age)
  }
}

const obj = new Person();
obj.displayName();
obj.print();
obj.printAge();
