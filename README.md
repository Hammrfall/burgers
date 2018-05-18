# burgers

## Functionality
This application allows the user to input a new burger, which will then be displayed as available.  The burgers in the available list can be 'consumed', whereupon they appear in the consumed list.

The app utilizes a mySQL database for persistence, as well as handlebars to dynamically create and update the HTML.

![Interface](/public/assets/img/ClassDiagram.png "Interface diagram")

## Technology
This is a full stack app running  on an express node server.  It is also a demonstration of the MVC pattern of programming.

### Models
* mySQL
* ORM.js
* burger.js

### Views
* handlebars (HTML)
* CSS
* server.js

### Controllers
* burgers_controller.js


The relationships within this pattern are demonstrated in this diagram:

![UML](/public/assets/img/ClassDiagram.png "server diagram")

## Libraries and technologies used:
* NodeJS
* Express
* body-parser
* Express-Handlebars
* mySQL

## Languages used:
* HTML
* CSS
* JavaScript
* SQL
