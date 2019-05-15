var database = [
		{
			username: 'Flor',
			password: 'secret'
		},
		{
			username: 'Sally',
			password: '123'
		},
		{
			username: 'Billie',
			password: '777'
		}
];

var newsfeed = [

	{ 	username: 'Flor',
	  	timeline: 'Hello there'
	}, 
	{
		username: 'Billie',
		timeline: 'Green Day rocks'
	}, 
	{
		username: 'Jackie',
		timeline:'Hellooo!'
	}
];

function isUserValid(username, password){
	for(var i=0; i < database.length; i++){
		if(database[i].username === userNamePrompt && 
			database[i].password === passwordPrompt){
			return true;
		} 	
	}
	return false;
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password){
	if(isUserValid(username, password)){
		console.log(newsfeed);
	} else {
		alert('Wrong username or password');
	}
}

signIn(userNamePrompt, passwordPrompt);