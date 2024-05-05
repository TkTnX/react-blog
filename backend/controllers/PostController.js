import PostModel from "../models/Post.js";

export const getLastTags = async (req, res) => {
  try {
    const posts = await PostModel.find().limit(10).exec();

    const tags = posts
      .map((obj) => obj.tags)
      .flat()
      .splice(0, 10);

    res.json(tags);
  } catch (error) {
    console.log(error);
    res.json({
      message: "Не удалось получить теги",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .populate({
        path: "user",
        select: ["fullName", "avatarUrl"],
      })
      .exec();

    res.json(posts);
  } catch (error) {
    console.log(error);
    res.json({
      message: "Не удалось получить статьи",
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: {
          viewsCount: 1,
        },
      },
      {
        returnDocument: "after",
      }
    )
      .populate({
        path: "user",
        select: ["fullName", "avatarUrl"],
      })
      .exec()
      .then((doc, err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось получить статью",
          });
        }

        if (!doc) {
          console.log(err);
          return res.status(404).json({
            message: "Статья не найдена",
          });
        }

        res.json(doc);
      });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Не удалось получить статью",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndDelete({
      _id: postId,
    }).then((doc, err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Не удалось удалить статью",
        });
      }

      if (!doc) {
        console.log(err);
        return res.status(404).json({
          message: "Статья не найдена",
        });
      }

      res.json({
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Не удалось получить статью",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (error) {
    console.log(error);
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать статью!",
    });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.userId,
        tags: req.body.tags,
      }
    );

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось изменить статью!",
    });
  }
};
