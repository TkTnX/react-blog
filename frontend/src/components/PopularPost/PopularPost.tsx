import React from "react";
import { PostType } from "../Post/Post";

const PopularPost: React.FC<PostType> = ({ img, title, author, date }) => {
  return (
    <li className="max-w-72">
      <img className="rounded" src={img} alt="car" />
      <h4 className="text-xl font-bold mt-5">{title}</h4>
      <p className="italic, font-normal text-sm text-slate-500 mt-3">
        {author} - {date}
      </p>
    </li>
  );
};

export default PopularPost;
