import React from "react";

type BannerType = {
  img: string;
  title: string;
  date: any;
  author: string;
};

const Banner: React.FC<BannerType> = ({ img, title, date, author }) => {
  return (
    <a
      href="#!"
      className="relative max-w-max rounded-md overflow-hidden inline-block justify-self-center first:row-start-1 first:row-end-3"
    >
      <div className="absolute left-0 top-0 w-full h-full  z-1 bg-gradient-to-b from-black/10 to-black/70 hover:blur-2xl transition-all"></div>
      <img src={img} alt="car" />
      <p className="absolute top-8 left-5 text-xs font-normal py-1 px-3 bg-hintColor rounded-sm">
        Vehicle
      </p>
      <div className="absolute bottom-6 left-5 right-9 z-20">
        <p className="text-sm hidden md:block font-normal mb-1">
          {author} - {date}
        </p>
        <h4 className=" text-sm md:text-xl  font-bold">{title}</h4>
      </div>
    </a>
  );
};

export default Banner;
