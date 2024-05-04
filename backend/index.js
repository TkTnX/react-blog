import express from "express";

import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";

import checkAuth from "./utils/checkAuth.js";
import "dotenv/config";
import * as UserController from "./controllers/UserController.js";
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("База данных подключена!"))
  .catch((error) =>
    console.log(`Ошибка при подключении Базы Данных! ${error}`)
  );

const app = express();

app.use(express.json());

app.post("/auth/login", UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.me);

const PORT = 4444;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
