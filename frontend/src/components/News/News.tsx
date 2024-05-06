import React from "react";
import InstagramPhotos from "../InstagramPhotos/InstagramPhotos";
import NewsTags from "../NewsTags/NewsTags";
import Newsletter from "../Newsletter/Newsletter";

const News: React.FC = () => {
  return (
    <div className="flex mt-11 md:mt-0 md:block flex-wrap justify-evenly">
      <InstagramPhotos />
      <NewsTags />
      <Newsletter />
    </div>
  );
};

export default News;
