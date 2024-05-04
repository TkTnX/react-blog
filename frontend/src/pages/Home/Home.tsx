import React from "react";
import Banners from "../../components/Banners/Banners";
import Articles from "../../components/Articles/Articles";

const Home: React.FC = () => {
  return (
    <div className="font-main">

      <main>
        <Banners />
        <Articles />
      </main>

    </div>
  );
};

export default Home;
