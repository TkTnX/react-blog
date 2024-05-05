import React from "react";
import eyeImg from "./eye.svg";
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
}) => {
  return (
    <div className=" max-w-3xl relative rounded-md">
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
