# Eshop application
This project is a simulation of an e-commerce shop

# Features 
The products are retrieved from a json server 
The user can add and remove products to his cart  
The cart is saved in the Local Storage to be persisted even after closing the tab
The amount of product is dynamically updated and displayed in the nav bar 

# Launch the project 
To execute the application on your computer, you need to install : 
    NodeJS
    Angular CLI 

On the first launch use "npm install" 
the use the command "ng serve" to run the project.

to launch the json server : 
use the command "json-server --watch db.json"
and copy paste the file "ProductsJSON.json" in the "db.json" automatically created 

# Technical Stack 
Angular 12 
HTML 5 
CSS 3 
Bootstrap 10

# Tests 
I didn't have time to implement the test on this project. 
As I never created my own tests before, I focused on providing a functional application

# What should I have improved 
1. The same product is duplicated in the cart, instead It should be displayed on one line with the quantity 
In the Local Storage, I should have store an array of object {idProduct: id, quantity: number} instead of an array of id. 

when the user add a product 
    => quantity +1 

when the user remove a product 
    => if quantity = 1 => delete product 
    => if quantity > 1 => quantity -1 

2. I didn't spend time on the CSS and design, the application is not responsive 

