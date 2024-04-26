import React, { useEffect, useState } from "react";
import axios from "axios";
import PopularPost from "../PopularPost/PopularPost";
import { PostType } from "../Post/Post";
const Popular: React.FC = () => {
  const [posts, setPosts] = useState([]);
  try {
    useEffect(() => {
      axios
        .get("https://da4cb1e205f698ff.mokky.dev/popularPosts")
        .then(({ data }) => setPosts(data));
    }, []);
  } catch (error) {
    console.log("error >>>", error);
  }

  return (
    <div>
      <h3 className="title-3">Popular posts</h3>
      <ul className="grid gap-8">
        {posts.map((post: PostType) => (
          <PopularPost key={post.id} {...post} />
        ))}
      </ul>
    </div>
  );
};

export default Popular;
