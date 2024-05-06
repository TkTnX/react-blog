import React, { useEffect } from "react";
import Post, { PostType } from "../Post/Post";
import PostSkeleton from "../PostSkeleton/PostSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/posts";
import { RootState } from "../../redux/store";

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);
  const isLoadingPost = posts.status === "loading";
  try {
    useEffect(() => {
      // @ts-ignore
      dispatch(fetchPosts());
    }, []);
  } catch (error) {
    console.log(`ERROR >>>> ${error}`);
  }

  return (
    <>
      <div className="grid gap-3 vsm:gap-44">
        {(isLoadingPost ? [...new Array(3)] : posts.items).map(
          (post: PostType, i) =>
            isLoadingPost ? <PostSkeleton key={i} /> : <Post key={post._id} {...post} />
        )}
      </div>
    </>
  );
};

export default Posts;
