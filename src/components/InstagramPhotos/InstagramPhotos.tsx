import React from "react";

import inst01 from "/images/instagramPhotos/01.jpg";
import inst02 from "/images/instagramPhotos/02.jpg";
import inst03 from "/images/instagramPhotos/03.jpg";
import inst04 from "/images/instagramPhotos/04.jpg";
import inst05 from "/images/instagramPhotos/05.jpg";
import inst06 from "/images/instagramPhotos/06.jpg";

const InstagramPhotos: React.FC = () => {
  return (
    <div className="mt-14">
      <h3 className="title-3">Instagram</h3>
      <ul className="grid grid-cols-2 gap-3 justify-between">
        <li className="justify-self-center">
          <img src={inst01} alt="img" />
        </li>
        <li className="justify-self-center">
          <img src={inst02} alt="img" />
        </li>
        <li className="justify-self-center">
          <img src={inst03} alt="img" />
        </li>
        <li className="justify-self-center">
          <img src={inst04} alt="img" />
        </li>
        <li className="justify-self-center">
          <img src={inst05} alt="img" />
        </li>
        <li className="justify-self-center">
          <img src={inst06} alt="img" />
        </li>
      </ul>
      <a
        className="btns flex items-center justify-center gap-3 w-full"
        href="#!"
      >
        <img src="/images/icons/insta.svg" alt="Instagram" />
        <p>View instagram</p>
      </a>
    </div>
  );
};

export default InstagramPhotos;
