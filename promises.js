const promise = new Promise((resolve, reject) => {
	if(true){
		resolve('Stuff worked');
	} else {
		reject('Error, it broke');
	}
})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'HIII');
})

const promise3 = new Promise((resolve, reject) =>{
	setTimeout(resolve, 1000, 'pookie')
})

const promise4 = new Promise((resolve, reject) =>{
	setTimeout(resolve, 3000, 'is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
	console.log(values);
})

promise
  .then(result => result + '!')
  .then(result2 => {
  	throw Error
  	console.log(result2);
  })
  .catch(() => console.log('error!!')) //catches any error that happens between .then()

  const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
  ]

  Promise.all(urls.map(url => {
  	return fetch(url).then(resp => resp.json())
  })).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error'))

  // Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
	setTimeout(resolve, 4000, 'success')
})
// #2) Run the above promise and make it console.log "success"
promise.then(result => {
	console.log(result);
})

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
.catch(() => {
	console.log('Ooops something went wrong')
})
// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
	console.log(results[3])
}).catch(() => console.log('error'))

