import React, { useState } from "react";
import searchImg from "./images/search.svg";
import userImg from "./images/suer.svg";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  openModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  return (
    <header className="bg-black py-9 text-white text-sm font-normal">
      <div className="container flex justify-between gap-3 items-center">
        <button
          onClick={() => setOpenModal(!openModal)}
          className="w-7 h-7 grid md:hidden relative z-12"
        >
          <span
            className={`w-full h-1 bg-white ${
              openModal ? "rotate-45 translate-y-3" : "rotate-0"
            } transition-all`}
          ></span>
          <span
            className={`w-full h-1 bg-white ${
              openModal ? "opacity-0" : "opacity-100"
            } transition-all`}
          ></span>
          <span
            className={`w-full h-1 bg-white ${
              openModal ? "-rotate-45 -translate-y-2" : "rotate-0"
            } transition-all`}
          ></span>
        </button>
        <div
          className={`absolute left-0 top-0 bottom-0 bg-black text-white z-10 p-10 w-52 mt-24 text-center ${
            openModal ? "translate-x-0" : "-translate-x-full"
          }   transition-all`}
        >
          <nav>
            <ul className="grid gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Link
            to="/"
            className="flex items-center gap-1 hover:opacity-80 transition-all"
          >
            <h6>Premium</h6>
            <span className="bg-hintColor rounded-md p-1">CAR</span>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <li>
              <Link to="/" className="hover:opacity-80 transition-all">
                Home
              </Link>
            </li>
            <li>
              <a className="hover:opacity-80 transition-all" href="#">
                Recipes
              </a>
            </li>
            <li>
              <a className="hover:opacity-80 transition-all" href="#">
                Article
              </a>
            </li>
            <li>
              <a className="hover:opacity-80 transition-all" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:opacity-80 transition-all" href="#">
                Purchase
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <button type="button" className="hover:opacity-80 transition-all">
            <img src={searchImg} alt="Search..." />
          </button>
          <Link
            to="/auth/registration"
            className="hover:opacity-80 transition-all"
          >
            <img src={userImg} alt="Account" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
