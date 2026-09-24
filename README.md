# Introduction

This is the final project for my Intro To React course offered by Web Dev Simplified

There are two folders in this project. The `api` folder contains the code for the fake API we will be using, while the `client` folder contains the .jsx filesIn order to start the API and Client you need to run `npm run dev` inside the `api` and `client` folders (make sure you run `npm i` first to install the dependencies). This should start up an API on `http://localhost:3000`. This API is built on the [json-server](https://www.npmjs.com/package/json-server) package, which is a great tool for quickly building fake APIs. Essentially, whenever you make a request to the API it will read/write to the `db.json` file to get your data. I also included a `db.example.json` file which is the same as the `db.json` file, but it will never be modified so if you want to reset the API data to its original state you can copy the JSON from the `db.example.json` file into the `db.json` file.

# API Information

The API has the following endpoints:

- `GET /posts` - Returns all of the posts
- `GET /posts/:id` - Returns a single post
- `GET /posts/:id/comments` - Returns all of the comments for a single post
- `GET /users` - Returns all of the users
- `GET /users/:id` - Returns a single user
- `GET /posts?userId=<userId>` - Returns all of the posts for a single user
- `GET /todos` - Returns all of the todos
- `GET /todos?userId=<userId>` - Returns all of the todos for a single user
