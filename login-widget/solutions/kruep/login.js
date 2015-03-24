/***************************************************************
	This code was written for a JavaScript learning exercise
	as part of the DC Web Women's March 2015 Code(Her) Workshop
	Introduction to JavaScript series.
	It is released under the MIT license.
	
	Authored by: Patricia Kruep
	http://littleberrystudio.com
	@littleberry (Twitter, GitHub, Codepen)
	
	Referenced by: login.html
	
***************************************************************/


var loginBtn = document.getElementById("loginBtn"); //get a reference to the login button and store it in a variable for eassy access

loginBtn.onclick = function() {
	/*
		Event handler for loginBtn click event.
		Executes when user clicks the login button.
		Add your code to make after these comments and before the closing curly brace.
	*/
	var login = "littleberry";
	var pwd = "codeher";
	var userName = document.getElementById("userName").value;
	var userPassword = document.getElementById("userPassword").value;
	var response = document.getElementById("response");
	if ((userName === login) && (userPassword === pwd)) {
		response.innerHTML = "Welcome, " + login + "!";
	} else {
		response.innerHTML = "Login failed. Please check your credentials."
	}
	
}