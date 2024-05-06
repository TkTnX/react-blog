import React from "react";
import { PostType } from "../Post/Post";

const PopularPost: React.FC<PostType> = ({
  imageUrl,
  title,
}) => {
  return (
    <li className="max-w-72">
      <img className="rounded" src={imageUrl} alt="car" />
      <h4 className="text-xl font-bold mt-5">{title}</h4>
    </li>
  );
};

export default PopularPost;
