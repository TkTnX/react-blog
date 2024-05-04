import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostType } from "../../components/Post/Post";

import viewsImg from "./images/views.svg";
import ContentLoader from "react-content-loader";

const FullPost: React.FC = () => {
  const [data, setData] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://da4cb1e205f698ff.mokky.dev/posts/${id}`)
      .then((res) => {
        setData(res.data);
          setIsLoading(false);
          window.scrollTo(0, 0)
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении статьи!");
        navigate("/");
      });
  }, []);

  if (isLoading || !data) {
    return <ContentLoader />;
  }
  return (
    <div>
      <div className="container">
        <div className="max-w-4xl mx-auto mt-7">
          <img className="w-full" src={data.img} alt={data.title} />

          <h2 className="text-2xl md:text-5xl font-bold mt-3">{data.title}</h2>
          <p className="mt-5 text-smz md:text-lg font-medium">{data.description}</p>
          <div className="flex items-center justify-between">
            <p className="mt-4">
              {data.author} - {data.date}
            </p>
            <div className="flex gap-3 mt-4">
              <img src={viewsImg} alt="views" />
              <p className="font-bold">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
