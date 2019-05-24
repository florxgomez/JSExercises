fetch('https://jsonplaceholder.typicode.com/users')
	.then(resp => resp.json())
	.then(console.log)

async function fetchUsers(){
const response = await fetch('https://jsonplaceholder.typicode.com/users') //it will pause until we get a reponse from fetch
	const data = await response.json();
	console.log(data);
}

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

	Promise.all(urls.map(url => 
		fetch(url).then(resp => resp.json())
		)).then(array => {
		console.log(array[0])
		console.log(array[1])
		console.log(array[2])
	}).catch('oops');

const getData = async function(){
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url => 
		fetch(url).then(resp => resp.json())
	))
	console.log(users)
	console.log(posts)
	console.log(albums)
	} catch(err) {
		console.log('oops', err);
	}	
}

fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

  async function getStarships() {
    try {
        const response = await fetch('https://swapi.co/api/starships/9/');
    const data = await response.json();
    console.log(data);
  } catch(err){
    console.log('ooooooops', err)
  }
}

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}