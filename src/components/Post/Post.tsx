import React from "react";

export type PostType = {
  id: string;
  img: string;
  category: string;
  title: string;
  author: string;
  date: string;
  description: string;
};

const Post: React.FC<PostType> = ({
  img,
  category,
  title,
  author,
  date,
  description,
}) => {
  return (
    <div className="max-w-3xl relative rounded-md">
      <img className="w-full rounded-md" src={img} alt="Car" />
      <div className=" vsm:absolute -bottom-32 left-5 right-5 rounded-md bg-white p-8">
        <p className="hint text-white">{category}</p>
        <h3 className="mt-10 text-2xl font-bold">{title}</h3>
        <p className="mt-4 italic text-slate-500 text-sm font-normal">
          {author} - {date}
        </p>
        <p className="mt-4 text-slate-500 text-sm font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Post;
