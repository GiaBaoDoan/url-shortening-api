import logoFooter from "../assets/images/white-logo.svg";
import faceBook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import printerest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="max-width sm:grid grid-cols-6 max-xl:grid-cols-2 max-sm:flex flex-col items-center gap-10">
        <div className="col-span-2">
          <img src={logoFooter} className="footer-logo" alt="" />
        </div>
        <div className="list-menu grid grid-cols-3 col-span-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-10 gap-20">
          <div className="menu">
            <h3 className="text-lg mb-2  text-white">Features</h3>
            <ul className="flex flex-col gap-3 mt-5">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Link Shortening
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Branded Links
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="text-lg mb-2  text-white"> Resources</h3>
            <ul className="flex flex-col gap-3 mt-5">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="text-lg mb-2  text-white">Company</h3>
            <ul className="flex flex-col gap-3 mt-5">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="brands flex gap-10 items-start col-span-1">
          <img src={faceBook} className="w-auto" alt="" />
          <img src={instagram} alt="" />
          <img src={printerest} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
