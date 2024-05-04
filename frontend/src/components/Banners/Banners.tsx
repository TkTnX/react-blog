import React from "react";
import Banner from "../Banner/Banner";

const date = new Date();
const bannersData = [
  {
    id: 1,
    img: "/images/banners/01.jpg",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
    author: "Rickie Baroch",
  },
  {
    id: 2,
    img: "/images/banners/02.jpg",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
    author: "Rickie Baroch",
  },
  {
    id: 3,
    img: "/images/banners/03.jpg",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
    author: "Rickie Baroch",
  },
  {
    id: 4,
    img: "/images/banners/04.jpg",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
    author: "Rickie Baroch",
  },
  {
    id: 5,
    img: "/images/banners/05.jpg",
    title: "One of Saturn’s largest rings may be newer than anyone",
    date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
    author: "Rickie Baroch",
  },
];

const Banners: React.FC = () => {
  return (
    <div className="container mt-7">
      <div className="text-white grid grid-cols-1 vsm:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-7">
        {bannersData.map((banner) => (
          <Banner key={banner.id} {...banner} />
        ))}
      </div>
    </div>
  );
};

export default Banners;
