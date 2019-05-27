//This is a main.js file
"use strict"
//this code is place holder code that creates an event listener for the button which adds the current date and time to the page
let a = document.getElementById("btn").addEventListener("click", function(){
	let getDate = new Date();
	getDate.getDate();
	let x = document.getElementById("wrapper");
	let y = document.createElement("p");
	let z = document.createTextNode(`Today is ${getDate}`);
	y.appendChild(z);
	x.appendChild(y);
});
