testwatable
===========

Simple node.js express with watable to display a simple sortable table

Simple node.js express with watable to display a simple sortable table

Basic idea to build project

$ cd
$ express --css stylus --ejs testwatable

   create : testwatable
   create : testwatable/package.json
   create : testwatable/app.js
   create : testwatable/public
   create : testwatable/public/javascripts
   create : testwatable/public/images
   create : testwatable/public/stylesheets
   create : testwatable/public/stylesheets/style.styl
   create : testwatable/routes
   create : testwatable/routes/index.js
   create : testwatable/routes/user.js
   create : testwatable/views
   create : testwatable/views/index.ejs

   install dependencies:
     $ cd testwatable && npm install

   run the app:
     $ node app

Built test data using http://www.json-generator.com/

[
    '{{repeat(500, 7)}}',
    {
        email: '{{email}}',
        firstname: '{{firstName}}',
        lastname: '{{surname}}'
    }
]

Using package.json
{
  "name": "testwatable",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "3.2.6",
    "ejs": "*",
    "stylus": "*",
    "jade": "*",
    "jquery": "*"
  }
}
Note: Not using ejs though included it in the build

Current error is listed below. Not quite sure how to resolve. Attempted a couple things by adding different versions
of jquery.

This error shows up from the chrome browser is in debug mode
Uncaught ReferenceError: jQuery is not defined                  jquery.watable.js:24
(anonymous function)

Output of log for running system
/usr/local/bin/node app.js
Express server listening on port 4200
/Users/toulon/testwatable/views/watable.jade, line 21:
Implicit textOnly for `script` and `style` is deprecated.  Use `script.` or `style.` instead.
GET / 200 746ms - 636b
GET /watable/jquery-1.7.2.min.js 304 3ms
GET /watable/jquery.watable.js 304 3ms
GET /watable/watable.css 304 3ms
GET /stylesheets/style.css 200 187ms - 110b
