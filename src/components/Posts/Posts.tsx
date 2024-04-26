import React, { useEffect, useState } from "react";
import Post, { PostType } from "../Post/Post";
import axios from "axios";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);

  try {
    useEffect(() => {
      axios
        .get("https://da4cb1e205f698ff.mokky.dev/posts")
        .then(({ data }) => setPosts(data));
    }, []);
  } catch (error) {
    console.log(`ERROR >>>> ${error}`);
  }

  return (
    <div className="grid gap-3 vsm:gap-44">
      {posts.map((post: PostType) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
