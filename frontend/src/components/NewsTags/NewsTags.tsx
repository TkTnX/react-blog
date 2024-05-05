import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/slices/posts";
import { RootState } from "../../redux/store";

const NewsTags: React.FC = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchTags());
  }, []);

  return (
    <div className="max-w-64 mt-14">
      <h3 className="title-3">Tags</h3>

      <ul className="flex flex-wrap gap-2">
        {tags.items.map((tag, index) => (
          <li
            className="py-2 px-4 bg-gray-100  hover:opacity-80 transition-all"
            key={index}
          >
            <a href={`/posts/tags/${tag}`}>{tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsTags;
