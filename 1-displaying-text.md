#Displaying text
The html page for the application.
We will use a div to display text to the user.
we set an id for the div so we can grab it from javascript.
And we also include our javascript file.
file: index.html
~~~
<!doctype html>
<html>
 <head>
  <meta charset="utf8">
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

