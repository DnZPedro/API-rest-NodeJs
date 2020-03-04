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

As the application got more extensive, MongoDB's n -> n (1 to 1) system ends up not being so useful, because whenever we create a new project with the **"tasks"**, it creates a *new task*, the created task has a unique id, and contains the project id as well, it may be that with many tasks being created separately, the database becomes too heavy to run.

 > If your application has become too extensive, it is recommended to switch to a non-relational database (MySQL, Postgrees...).

## Middlewares

The middleware is like "*invaders*" haha ​​but in the good sense, they intercept the request made and from the received parameters it acts, in the case of this middleware, it basically does some checks to know if the user token is valid. It checks the formatting of the token, and whether it was provided or not.

## Config

In the "*config*" folder, we have two .json files, you can already imagine what each one does by name.    

 - **Auth.json**, contains a *secret key*, so mysterious... This secret key is used by controllers when the *user's password is generated*, it is like a md5 hash from PHP. You can generate this secret key from websites, or even own algorithms, be happy about it.

 - The **mail.json** file basically contains the data that MailTrap uses to make the connection between them and your application. *Nothing very relevant*.

## Database

The versatility of MongoDB is what makes me love it the most, in other databases, creating a "*table*", requires a few lines of code before you even start using it, MongoDB, by connecting you already start it and automatically create the collection. Simply incredible.

## Modules

The **"modules"** folder, contains a file called **mailer.js**, well, when I used this package for the first time I had a little difficulty, a lot has already been deprecated, but that's it.

 - This file "*configures*" the mailer to send the password recovery email, when I was programming I had to add a const "**handlebarOptions**", without it, the node would simply break to try to execute it. Again... A lot has already been deprecated.

## Resources

The "**resources**" folder, contains only one thing, the "**forgot_password**" page, this page is necessary for the "*mailer*" package to send the password recovery email, basically it contains a message and a *new token generated* from that function "**generateToken**", with 1 hour to be used.

 >After 1 hour, if the token is not used, when the authController attempts to verify it, entry will be denied.

**So that's it folks, I'm a dev apprentice, I have been programming for just over 6 months, and this API is a great brand for everything I've studied so far.**