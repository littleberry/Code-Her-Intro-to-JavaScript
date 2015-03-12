# Login Widget Exercise/Homework

## Description
This exercise is based on the Hello, Code(Her) example covered during the workshop.

The objective is to create a login "widget." There are two input fields: a text input field for the user name and a password input field for the password. Write the JavaScript code necessary to collect the values contained in each input field and test them against "valid credentials"*. If the user name and password match the user name and password credentials, a welcoming message is displayed. If the user name and password do not match the credentials, a login fail or error message is displayed.

*This is primarily a thought/practice exercise as validating a login is typically done over a secure connection to a server with encrypted data.

## Files
+ [login.html](login-widget/login.html) contains all the HTML you need for this exercise. Notice on line 35 is a `<script>` tag that loads the external JavaScript file.
+ [login-styles.css](login-widget/login-styles.css) contains all the styles associated with the HTML file. Feel free to modify the styles as you wish.
+ [login.js](login-widget/login.js) is your JavaScript file. The click event handler for the loginBtn is already added for you. Your code to validate the login credentials will go between the click event handler's curly braces.

## Notes and tips
+ You might want to read up a little more about operators. Mozilla Developer Network (MDN) has a good article outlining the different operators found in JavaScript. In particular, you'll want to pay attention to the comparison and logical operators.
  + Comparison operators are the ones for comparing two values. Are the two values equal (==)? Are the two values not equal (!=)? Is one value greater than (>) or less than (<) the other (the alligaotr goes to the bigger number)?
  + Logical operators are all about true and false. There are three:
    + AND (`&&`) as in "Shall we get coffee && chocolate?" Both need to be true for the expression to be true: e.i. 'yes' to both coffee and chocolate.)
    + OR (`||`) as in "Would you like coffee || tea?" Only one of these needs to be true for the expression to be true.
    + NOT (`!`) as in "!More pie. I'm stuffed." Or, "If the bacon is !burned, I'll take it." NOT flips the true/false value of the expression. What's true becomes false, what's false becomes true. Trippy.
+ You have to look at two things:
  + Both must contain a string of characters (not an empty string)
  + Both must match the user name and password credentials (which you probably have saved in a couple of variables, wink wink).
