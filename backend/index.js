import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import path from "path";
import {
  loginValidation,
  postCreateValidation,
  registerValidation,
} from "./validations.js";

import { handleValidationErrors, checkAuth } from "./utils/index.js";
import "dotenv/config";

import { UserController, PostController } from "./controllers/index.js";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("База данных подключена!"))
  .catch((error) =>
    console.log(`Ошибка при подключении Базы Данных! ${error}`)
  );

const app = express();

// Ensure the uploads directory exists
const UPLOADS_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.me);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post("/avatars", upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get("/tags", PostController.getLastTags);
app.get("/posts/tags", PostController.getLastTags);
app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.post(
  "/posts",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.create
);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.patch(
  "/posts/:id",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update
);

const PORT = 4444;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(
    `Сервер запущен: ${
      "https://react-blog-rrdj.onrender.com" || `http://localhost:${PORT}`
    } `
  );
});
