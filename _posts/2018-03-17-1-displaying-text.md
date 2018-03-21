# Displaying text
* Create a basic html
* Set the page title
* Display static header text
* Include a javascript file in our html
* Get a reference to an html element and chage its text content.

The html page for the application.
We will use a div to display text to the user.
we set an id for the div so we can grab it from javascript.
And we also include our javascript file.
file: index.html
~~~
<!doctype html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>Display Info App</title>
 </head>
 <body>
  <h1>Display Information Application</h1>
  <div id="info"></div>
  <script src="main.js"></script>
 </body>
</html>
~~~
File: main.js
~~~
/**
* Main application
* */
const info = document.getElementById('info')
info.textContent('Helloworld!")
~~~

That's it.
We can open our index.html file in chrome, just double click it, and we will see our hello world! message displayed on the webpage.

Sample Page:
[http://javascript.kennyming.com/code/1-displaying-text/](http://javascript.kennyming.com/code/1-displaying-text/)

Sample Code:
[https://github.com/kennymingt/javascript/tree/master/code/1-displaying-text](https://github.com/kennymingt/javascript/tree/master/code/1-displaying-text)

