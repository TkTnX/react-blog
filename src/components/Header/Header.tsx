import React from "react";
import searchImg from "./images/search.svg";
const Header: React.FC = () => {
  return (
    <header className="bg-black py-9 text-white text-sm font-normal">
      <div className="container flex justify-between gap-3 items-center">
        <button className="w-7 h-7 grid md:hidden">
          <span className="w-full h-1 bg-white"></span>
          <span className="w-full h-1 bg-white"></span>
          <span className="w-full h-1 bg-white"></span>
        </button>

        <div>
          <a
            href="#!"
            className="flex items-center gap-1 hover:opacity-80 transition-all"
          >
            <h6>Premium</h6>
            <span className="bg-hintColor rounded-md p-1">CAR</span>
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <li>
              <a className="hover:opacity-80 transition-all" href="#">
                Home
              </a>
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

        <div>
          <button className="hover:opacity-80 transition-all">
            <img src={searchImg} alt="Search..." />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
