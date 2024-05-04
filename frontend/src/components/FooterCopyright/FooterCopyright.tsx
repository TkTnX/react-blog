import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright: React.FC = () => {
  return (
    <div className="bg-black text-white py-9">
      <div className="container grid text-center justify-center gap-4 md:flex md:justify-between">
        <p>@2024 Logwork. All Right Reserved.</p>
        <nav className="hidden vsm:block">
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
      </div>
    </div>
  );
};

export default FooterCopyright;
