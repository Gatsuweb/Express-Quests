const express = require("express");

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const usersControllers = require("./controllers/usersControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.post("/api/movies", movieControllers.postMovie);
app.put("/api/movies/:id", movieControllers.updateMovie);
app.delete("/api/movies/:id", movieControllers.deleteMovie);

app.get("/api/users", usersControllers.getUsers);
app.get("/api/users/:id", usersControllers.getUsersById);
app.post("/api/users", usersControllers.postUsers);
app.put("/api/users/:id", usersControllers.updateUser);
app.delete("/api/users/:id", usersControllers.deleteUser);




module.exports = app;
