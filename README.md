# API NodeRest NodeJs

This node REST API briefly contains: a registration system, user authentication, unique user token, password recovery by email (TrapMail) and a basic CRUD. Debug with Insomnia. 

## Controllers

In the "*app*" folder, we have the controllers, middlewares and application models, by far the controllers are the main part of the application so I will emphasize it.  

>The authController, basically controls all authentication, it uses the modules "express", "bcrypt", "jsonwebtoken" and "mongoose".  

 - It contains a function called **"generateToken"**, which receives parameters inside an object, and using **"jwt"**, it creates a token for the user and from that token he can access it or not.  

 - The authController also contains the routes to authenticate, register a new user, a **"forgot my password"** route and a route to recover your password.

 - In the **"forgot_password"** route, basically a request is made using the **"mailer"** package (*MailTrap*), which searches the user for the database, and with the email he searches for with **"req.body"**, sends a message with a new token, that token has one hour after being created to be used.

 - Every time a new request is made, the authController performs a new authentication to check whether the generated token is valid or not.  

The projectController.js, basically controls the projects haha, simple isn't it? He is the **"CRUD"** of the application.  

## Models  

We have 3 models, **project.js**, where we create our projects, **task.js**, which is integrated with the project and lastly **user.js**, which is where we create our users.
