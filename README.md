# Code Challenge - Week 5 (Mongo Databases and Full Stack Logic - Debug)

## Overview

This Code Challenge is different from the rest. This time, you will need to debug an existing code base. You will need your
complete knowledge of the past 4 weeks to successfully navigate the problems that are in the code.

Keep in mind, often debugging is stressful for a couple reasons:

* The problems are not obvious, especially when you did not write the code.

* The solutions are often simple. Have confidence in your solutions and move onto the next problem.

* Debugging code bases that are not yours takes time. Take your time to work through each of the steps.


In addition to making the changes to the code base to correct the code, update this README.md file to explain your solutions. Meaning, in your own words, explain the problem and why your solution fixes the problem.


## TODO

### Base Mode
[X] - Mongo does not seem to be connecting correctly.
var mongoURI = "mongodb://localhost:2701/realestate";
•Mongo uses port 27017. In order for mongo to work, the correct port number needs to be used. In this case, the last number, 7, was left out; therefore, mongo was unable to connect to the server.


[X] - The models have a conflict.
var Apartments = mongoose.model("listings", ApartmentSchema, "listings");
var Houses = mongoose.model("listings", HouseSchema, "listings");
•The first parameter in a model is specific to the new collection that is being created, this will override the existing 'listings' collection. So, because these two models have the same string in the first parameter, there is a conflict and 'listings' model cannot be overwritten. 'listings' can only be used in the last parameter, indicating the existing collection.


[X] - Index.html is not being properly served.
app.get("/", function(req,res){
  res.sendFile(path.resolve("./server/public/views/index.html"));
});
•This bit of code was missing, which specified the location of index.html. Since index.html is contained inside the views folder (server/public/views/index.html), using app.use(express.static("./server/public")); alone won't locate the file. This would work only if index.html was located in the public folder (server/public/index.html). Express.static searched for index.html only within the specified path, it doesn't look in subfolder.


[X] - Posting information does not seem to come up correctly on the req.body as intended.
•body-parser was being used after 'listing.js'. In order for body-parser to work, it must load before the routes. With the way node works, everything flows down, so in most cases, what ever is being used first will load first.


[X] - The information from the database is not being appended to the DOM.
•The server is unable to find all the content in the public folder because (server/public) is in the .gitignore file. Because of that, it was never saved to github and therefore, unable to be seen or accessed by anyone remotely.


### Hard Mode
[ ] - All the information being appended on the DOM is not lining up together in their respective row.
It is!

### Pro Mode
[X] - Not that you need to, but if you were to post this on Heroku, it would not work correctly.
•In order to post this on Heroku, it would need to access the database remotely. Heroku is running the server, something needs to host the database. So, a remote database source like mLab would need to be connected to to the server. Instead of using localhost:27017, the specified mlab database url would need to be included. Once that is done, this app is ready to be deployed!
