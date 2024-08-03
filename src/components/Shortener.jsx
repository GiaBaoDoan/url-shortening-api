import bgMobile from "../assets/images/bg-shorten-mobile.svg";
import bgDesktop from "../assets/images/bg-shorten-desktop.svg";
import { useEffect, useRef, useState } from "react";
const Shortener = () => {
  const [text, setText] = useState("");
  const [links, setLinks] = useState();
  const [copied, setCopied] = useState();
  const [error, setError] = useState({
    errText: "",
    errStatus: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      return setError({
        ...error,
        errStatus: true,
        errText: "Please add the link",
      });
    }
    const res = await fetch(`https://tinyurl.com/api-create.php?url=${text}`);
    const data = await res.text();
    if (data === "Error") {
      return setError({
        ...error,
        errStatus: true,
        errText: "The url isn't valid",
      });
    }
    const link = { longLink: text, shortLink: data, copy: false };
    const updateLinks = [...links, link];
    setLinks(updateLinks);
    localStorage.setItem("links", JSON.stringify(updateLinks));
    setText("");
    setError({
      errText: "",
      errStatus: false,
    });
  };
  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem("links")) || []);
    const timeOut = setTimeout(() => setCopied(), 800);
    return () => {
      // 👇️ Clear the timeout when the component unmounts
      clearTimeout(timeOut);
    };
  }, [copied]);
  return (
    <section className="bg-slate-100 py-10 px-2">
      <div className="max-width">
        <div className="shortener relative">
          <picture>
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="bgMobile" />
          </picture>
          <div>
            <form onSubmit={handleSubmit} className="form gap-5">
              <div className="flex gap-5 max-md:gap-1 max-md:flex-col">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className={`bg-white outline-none  flex-1 p-5 py-3 px-5 rounded ${
                    error.errStatus && "border-error"
                  }`}
                  type="text"
                  placeholder="Shorten a link here..."
                />
                {error.errStatus && (
                  <p className="mt-2 md:hidden">
                    <i className="text-red-400">{error.errText}</i>
                  </p>
                )}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn-cta rounded-md !px-10"
                >
                  Shorten It!
                </button>
              </div>
              {error.errStatus && (
                <p className="mt-2 max-md:hidden">
                  <i className="text-red-400">{error.errText}</i>
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          {links?.map((link, index) => {
            return (
              <div
                key={index}
                className="link max-md:flex-col flex p-5 items-center gap-5 max-md:items-start rounded-lg bg-white justify-between"
              >
                <p className="long-link text-xl max-md:text-base w-full text-slate-600">
                  {link.longLink}
                </p>
                <hr className="w-full md:hidden" />
                <div className="flex items-center max-md:items-start max-md:w-full max-md:flex-col gap-3">
                  <p className="short-link text-cyan-500 max-md:text-base text-xl">
                    {link.shortLink}
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(link.shortLink);
                      setCopied(index);
                    }}
                    className={`rounded-lg w-full !px-7 ${
                      copied === index
                        ? "bg-slate-800 py-2  text-white"
                        : "btn-cta "
                    }`}
                  >
                    {copied === index ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shortener;
