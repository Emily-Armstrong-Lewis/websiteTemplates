//This is a main.js file
"use strict"
let a = document.getElementById("btn").addEventListener("click", function(){
	let getDate = new Date();
	getDate.getDate();
	let x = document.getElementById("wrapper");
	let y = document.createElement("p");
	let z = document.createTextNode(`Today is ${getDate}`);
	y.appendChild(z);
	x.appendChild(y);
});