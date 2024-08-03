import { useState } from "react";
import logo from "../assets/images/logo.svg";
const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <header className="header  max-width py-5">
      <div className="flex relative items-center justify-between">
        <article className="flex items-center gap-10">
          <img src={logo} alt="logo-header" />
          <nav className="max-md:hidden">
            <ul className="flex gap-5">
              <li>
                <a className="text-slate-400 hover:text-black" href="#!">
                  Features
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-black" href="#!">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-black" href="#!">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
        </article>
        <div className="flex gap-5 max-md:hidden">
          <button className="text-slate-400">Login</button>
          <button className="btn-cta rounded-full">Sign up</button>
        </div>
        <button onClick={() => setIsopen(!isOpen)} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        {isOpen && (
          <div className="bg-slate-700 absolute w-full top-5 md:hidden rounded p-5 mt-5">
            <nav className="mb-5">
              <ul className="flex flex-col items-center gap-5">
                <li>
                  <a href="#" className="text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    Resources
                  </a>
                </li>
              </ul>
            </nav>
            <hr />
            <div className="flex flex-col gap-2 mt-5">
              <button className="text-white">Login</button>
              <button className="btn-cta rounded-full">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
