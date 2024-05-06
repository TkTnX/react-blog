import React, { useState } from "react";
import Posts from "../Posts/Posts";
import News from "../News/News";
import "./style.css"
const types = ["Новые", "Популярные"];

const Articles: React.FC = () => {
  const [activeType, setActiveType] = useState(0);

  const handleChangeType = (index: number) => setActiveType(index);

  return (
    <div className="container block md:flex gap-6 lg:gap-32 mt-20">
      <div>
        <ul className="flex gap-4 mb-6">
          {types.map((type, index) => (
            <li key={index}>
              <button
                onClick={() => handleChangeType(index)}
                className={`text-xl types ${activeType === index && "types--active"}`}
              >
                {type}
              </button>
            </li>
          ))}
        </ul>
        <Posts />
      </div>
      <News />
    </div>
  );
};

export default Articles;
