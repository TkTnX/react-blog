import express from "express";

import mongoose from "mongoose";
import {
  loginValidation,
  postCreateValidation,
  registerValidation,
} from "./validations.js";

import checkAuth from "./utils/checkAuth.js";
import "dotenv/config";
import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("База данных подключена!"))
  .catch((error) =>
    console.log(`Ошибка при подключении Базы Данных! ${error}`)
  );

const app = express();

app.use(express.json());

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.me);

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.post("/posts", checkAuth, postCreateValidation, PostController.create);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.patch("/posts/:id", checkAuth, PostController.update);

const PORT = 4444;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
