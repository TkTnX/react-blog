import React from "react";
import Posts from "../Posts/Posts";
import News from "../News/News";

const Articles: React.FC = () => {

  return (
    <div className="container block md:flex gap-6 lg:gap-32 mt-20">
      <div>
        <Posts />
      </div>
      <News />
    </div>
  );
};

export default Articles;
