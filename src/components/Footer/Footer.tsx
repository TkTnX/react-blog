import React from "react";

import facebookImg from "./images/facebook.svg";
import twitterImg from "./images/twitte.svg";
import pinterestImg from "./images/pinterest.svg";
import googleImg from "./images/google.svg";
import instaImg from "./images/insta.svg";

import car01 from "/images/footer/01.jpg";
import car02 from "/images/footer/02.jpg";
import car03 from "/images/footer/03.jpg";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-btns pt-16 pb-12 text-white mt-40">
        <div className="container flex justify-center gap-10 flex-wrap lg:grid lg:grid-cols-3">
          <div>
            <a
              href="#!"
              className="flex items-center gap-1 hover:opacity-80 transition-all"
            >
              <h6>Premium</h6>
              <span className="bg-hintColor rounded-md p-1">CAR</span>
            </a>
            <p className="mt-7 max-w-64 opacity-45 font-normal text-sm">
              Short description about the company Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
            <div className="mt-16">
              <h5 className="text-xl font-bold">Keep in touch</h5>
              <ul className="mt-6 flex gap-4 items-center ">
                <li className="bg-zinc-800 p-3 rounded-sm hover:opacity-80 transition-all">
                  <a href="#!">
                    <img src={facebookImg} alt="social" />
                  </a>
                </li>
                <li className="bg-zinc-800 p-3 rounded-sm hover:opacity-80 transition-all">
                  <a href="#!">
                    <img src={twitterImg} alt="social" />
                  </a>
                </li>
                <li className="bg-zinc-800 p-3 rounded-sm hover:opacity-80 transition-all">
                  <a href="#!">
                    <img src={pinterestImg} alt="social" />
                  </a>
                </li>
                <li className="bg-zinc-800 p-3 rounded-sm hover:opacity-80 transition-all">
                  <a href="#!">
                    <img src={googleImg} alt="social" />
                  </a>
                </li>
                <li className="bg-zinc-800 p-3 rounded-sm hover:opacity-80 transition-all">
                  <a href="#!">
                    <img src={instaImg} alt="social" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-72">
            <h5 className="text-xl font-bold">Recent posts</h5>
            <ul className="grid gap-6 mt-7">
              <li className="flex gap-5 items-center">
                <img src={car01} alt="car01" />
                <div>
                  <h6 className="text-base font-bold mb-3">
                    One of Saturn’s largest rings may be newer than…
                  </h6>
                  <p className="italic font-normal text-sm">
                    Rickie Baroch - June 6, 2019
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-center">
                <img src={car02} alt="car02" />
                <div>
                  <h6 className="text-base font-bold mb-3">
                    One of Saturn’s largest rings may be newer than…
                  </h6>
                  <p className="italic font-normal text-sm">
                    Rickie Baroch - June 6, 2019
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-center">
                <img src={car03} alt="car03" />
                <div>
                  <h6 className="text-base font-bold mb-3">
                    One of Saturn’s largest rings may be newer than…
                  </h6>
                  <p className="italic font-normal text-sm">
                    Rickie Baroch - June 6, 2019
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold">Newsletter</h5>
            <form className="mt-9">
              <input
                className="p-4 border border-gray-400 rounded w-full mb-2"
                type="text"
                placeholder="Your name"
              />
              <input
                className="p-4 border border-gray-400 rounded w-full"
                type="email"
                placeholder="Your email adress"
              />
              <button className="btns py-4 w-full bg-gray-900 ">
                Subscribe to newsletter
              </button>
            </form>
          </div>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
};

export default Footer;
