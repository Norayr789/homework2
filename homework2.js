const username = "cutepuppy_";
const password = "kmnhj465";
const id = "21";
const loggedOut = true;
const online = 3
const absent = 7- online;
const month = absent * 4;
const usernameInput = "cutepuppy_";
const passwordInput = "kmnhj465";



if(username === usernameInput && password === passwordInput && loggedOut === true){
	console.log("You are successfully logged in");
	console.log("Username: " + username + " ID: " + id);
	console.log((online + 1) + " " + "times online this week");
}
else{
	console.log("Wrong input. Please try again");
}
