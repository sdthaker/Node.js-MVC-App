# Node.js MVC App

Introducing popular architectural pattern Model-View-Controller (MVC) by building and structuring an application in Node.js using MVC.

## What is Model-View-Controller?
MVC is simply a design or architectural pattern used in software engineering. While this isn’t a hard rule, but this pattern helps developers focus on a particular aspect of their application, one step at a time.

The main goal of MVC is to split large applications into specific sections that have their own individual purpose.

It also allows developers to logically structure applications in a secure way, which is portrayed by this application. But first, let’s break down what each aspect of the pattern provides.

### Model
As the name implies, a model is a design or structure. In the case of MVC, the model determines how a database is structured, defining a section of the application that interacts with the database. This is where we define the properties of a user that will be store in our database.

The controller accesses the database through the model. You could say that the model is the heart of the application.

### View
The view is where end users interact within the application. Simply put, this is where all the HTML template files go.

### Controller
The controller interacts with the model and serves the response and functionality to the view. When an end user makes a request, it’s sent to the controller which interacts with the database.

You can think of the controller as a waiter in a restaurant that handles customers’ orders, which in this case is the view. The waiter then goes to the kitchen, which is the model/database, and gets food to serve the customers, which is the controller handling the request.
