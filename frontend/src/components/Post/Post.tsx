import React from "react";
import eyeImg from "./eye.svg";
import binImg from "./bin.svg";
import editImg from "./edit.svg";
import "./style.css";
import { Link } from "react-router-dom";
export type PostType = {
  _id: string;
  imageUrl: string;
  tags: string;
  title: string;
  user: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
  createdAt: string;
  text: string;
  viewsCount: number;
};

const Post: React.FC<PostType> = ({
  imageUrl,
  tags,
  title,
  user,
  createdAt,
  text,
  viewsCount,
  _id,
}) => {
  return (
    <div className="card max-w-3xl relative rounded-md">
      <div className="absolute right-2 top-2 flex items-center gap-4 z-10">
        <Link
          to={`/posts/${_id}/edit`}
          className="hover:opacity-45 transition-all"
        >
          <img
            className="opacity-0 transition-all p-1 rounded-full  bg-yellow-400 max-w-8"
            src={editImg}
            alt="Edit post"
          />
        </Link>
        <button className="hover:opacity-45 transition-all">
          <img
            className=" opacity-0 transition-all p-1 rounded-full bg-red-600 max-w-8"
            src={binImg}
            alt="Delete post"
          />
        </button>
      </div>
      {!imageUrl ? (
        <img
          className="w-full rounded-md"
          src="/images/posts/01.jpg"
          alt="Car"
        />
      ) : (
        <img className="w-full rounded-md" src={imageUrl} alt="Car" />
      )}

      <div className=" vsm:absolute -bottom-32 left-5 right-5 rounded-md bg-white p-8">
        <p className="hint text-white">{tags}</p>
        <h3 className="mt-10 text-2xl font-bold">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="mt-4 italic flex items-center gap-2 text-slate-500 text-sm font-normal">
            <img
              className="max-w-9 rounded-full overflow-hidden"
              src={user.avatarUrl}
              alt={user.fullName}
            />{" "}
            <div className="flex flex-col">
              <p>{user.fullName}</p> <p>{createdAt}</p>
            </div>
          </div>
          <p className="flex items-center gap-2">
            {viewsCount} <img className=" max-w-6" src={eyeImg} alt="Глаз" />
          </p>
        </div>
        <p className="mt-4 text-slate-500 text-sm font-normal">{text}</p>
      </div>
    </div>
  );
};

export default Post;
