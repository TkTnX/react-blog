import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostType } from "../../components/Post/Post";
import eyeImg from "./images/eye.svg";
import ReactMarkdown from "react-markdown";
import ContentLoader from "react-content-loader";
const FullPost: React.FC = () => {
  const [data, setData] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  try {
    useEffect(() => {
      window.scrollTo(0, 0);
      axios.get(`${import.meta.env.URL}/posts/${id}`).then(({ data }) => {
        setData(data);
        setIsLoading(false);
      });
    }, []);
  } catch (error) {
    console.log(error);
    alert("Ошибка при получении статьи!");
    navigate("/");
  }

  if (isLoading || !data) {
    return (
      <div className="container">
        <ContentLoader />
      </div>
    );
  }
  return (
    <div>
      <div className="container">
        <div className="max-w-4xl mx-auto my-10">
          {data.imageUrl && (
            <img
              className="w-full"
              src={`https://react-blog-rrdj.onrender.com${data.imageUrl}`}
              alt={data.title}
            />
          )}

          <h2 className="text-2xl md:text-5xl font-bold mt-3">{data.title}</h2>
          <div className="mt-5 text-smz md:text-lg font-medium">
            <ReactMarkdown children={data.text} />
          </div>
          <div className="flex items-center justify-between">
            <div className="mt-4 italic flex items-center gap-2 text-slate-500 text-sm font-normal">
              <img
                className="max-w-9 rounded-full overflow-hidden"
                src={data.user.avatarUrl}
                alt={data.user.fullName}
              />{" "}
              <div className="flex flex-col">
                <p>{data.user.fullName}</p> <p>{data.createdAt}</p>
              </div>
            </div>
            <p className="flex items-center gap-2">
              {data.viewsCount}{" "}
              <img className=" max-w-6" src={eyeImg} alt="Глаз" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
