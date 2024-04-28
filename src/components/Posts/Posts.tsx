import React, { useEffect, useState } from "react";
import Post, { PostType } from "../Post/Post";
import axios from "axios";
import PostSkeleton from "../PostSkeleton/PostSkeleton";
import Pagination from "../Pagination/Pagination";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  try {
    useEffect(() => {
      axios
        .get(`https://da4cb1e205f698ff.mokky.dev/posts?limit=5&page=${currentPage}`)
        .then(({data}) => {
          setPosts(data.items);
          setPageCount(data.meta.total_pages)
          console.log(currentPage)
        })
        .finally(() => setIsLoading(false));
    }, [currentPage]);
  } catch (error) {
    console.log(`ERROR >>>> ${error}`);
  }

  return (
    <>
      <div className="grid gap-3 vsm:gap-44">
        {isLoading
          ? [...new Array(3)].map((_, i) => <PostSkeleton key={i} />)
          : posts.map((post: PostType) => <Post key={post.id} {...post} />)}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
      />
    </>
  );
};

export default Posts;
