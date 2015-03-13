# Gallery Widget Exercise/Homework

## Description
This exercise is based on the To Do List example covered during the workshop.

The objective is to create a gallery "widget." The [gallery.js](gallery-widget/gallery.js) file contains an array of text strings. Each string is HTML for a link and thumbnail image. Write a JavaScript program to iterate (loop) through the array and write each array item out to the unordered list (don't forget to include the `<li>` tags!). The styles for placement are already taken care of.

## Files
+ [gallery.html](gallery-widget/gallery.html) contains all the HTML you need for this exercise. Notice on line 35 is a `<script>` tag that loads the external JavaScript file.
+ [gallery-styles.css](gallery-widget/gallery-styles.css) contains all the styles associated with the HTML file. Feel free to modify the styles as you wish.
+ [gallery.js](gallery-widget/gallery.js) is your JavaScript file. The click event handler for the loginBtn is already added for you. Your code to validate the login credentials will go between the click event handler's curly braces.

## Notes and tips
+ No need for a click event handler here.
+ A function might be a good idea. Not strictly necessary, but good practice.
+ Remember that array index values start counting at 0. The last array index value of an array will be the length of the array minus 1.
+ MDN has an an [article on `for()` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).
