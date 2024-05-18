import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/slices/auth";
import "easymde/dist/easymde.min.css";

import axios from "../../axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PostType } from "../../components/Post/Post";
import SimpleMdeReact from "react-simplemde-editor";
const AddPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const inputFileRef = useRef(null);
  const isEditing = Boolean(id);
  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      // @ts-ignore
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post(
        `${import.meta.env.URL}/upload`,
        formData
      );
      setImageUrl(data.url);
    } catch (error) {
      console.log(error);
      alert("Не удалось загрузить превью");
    }
  };

  const onSubmit = async () => {
    try {
      const fields = {
        title,
        text,
        imageUrl,
        tags: tags.split(","),
      };

      const { data } = isEditing
        ? await axios.patch(`${import.meta.env.URL}/posts/${id}`, fields)
        : await axios.post(`${import.meta.env.URL}/posts`, fields);
      const _id = isEditing ? id : data._id;
      navigate(`/post/${_id}`);
    } catch (error) {
      console.log(error);
      alert("Не удалось создать пост!");
    }
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`/posts/${id}`)
        // @ts-ignore
        .then(({ data }: PostType) => {
          setTitle(data.title);
          setText(data.text);
          setImageUrl(data.imageUrl);
          setTags(data.tags);
        })
        .catch((err) => {
          console.warn(err);
          alert("ошибка при получении статьи!");
        });
    }
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  const onChange = useCallback((value: string) => {
    setText(value);
  }, []);

  const handleDeletePreview = () => {
    setImageUrl("");
  };

  if (!localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <div className="mt-7">
        <div className="flex gap-6 items-center">
          <button
            //   @ts-ignore
            onClick={() => inputFileRef.current.click()}
            className="mb-5 bg-cyan-500 text-white p-2 rounded-lg hover:opacity-80 transition-all"
          >
            Добавить превью
          </button>
          {imageUrl !== "" && (
            <button
              onClick={handleDeletePreview}
              className="p-2 bg-red-600 rounded-lg text-white self-start hover:opacity-80 transition-all"
            >
              Удалить превью
            </button>
          )}
        </div>
        <input
          onChange={(event) => handleChangeFile(event)}
          ref={inputFileRef}
          type="file"
          hidden
        />

        <div>
          {imageUrl !== "" && (
            <img
              className="mb-1 max-w-lg relative "
              src={`https://react-blog-rrdj.onrender.com${imageUrl}`}
              alt="preview"
            />
          )}
          <div className="grid md:max-w-60">
            <input
              className="w-full md:w-96  text-4xl border mb-3 p-2  font-bold"
              type="text"
              placeholder="Заголовок"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="w-full md:w-96  text-2xl border mb-3 p-2  font-bold"
              type="text"
              placeholder="Теги (через запятую)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          {/* @ts-ignore */}
          <SimpleMdeReact options={options} value={text} onChange={onChange} />
        </div>
        <button
          onClick={onSubmit}
          type="submit"
          className=" mt-14 bg-cyan-500 text-white relative z-10 p-2 rounded-lg hover:opacity-80 transition-all"
        >
          {isEditing ? "Сохранить" : "Создать пост"}
        </button>
      </div>
    </div>
  );
};

export default AddPost;
