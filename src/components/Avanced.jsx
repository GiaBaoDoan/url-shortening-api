import fully from "../assets/images/icon-fully-customizable.svg";
import brand from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
const Avanced = () => {
  return (
    <section className="bg-slate-100 pb-10 pt-16 min-h-[40rem]">
      <div className="max-width flex items-center flex-col">
        <h3 className="text-4xl max-lg:text-3xl max-md:text-2xl text-slate-800 mb-5 text-center font-bold">
          Advanced Statistics
        </h3>
        <p className="text-slate-400 text-center max-w-[32rem]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="card  relative grid grid-cols-3 max-lg:grid-cols-1 mt-10 gap-20">
          <div className="line line-rps"></div>
          <article className="p-5 z-10 max-lg:flex flex-col justify-center items-center bg-white">
            <img
              src={brand}
              alt=""
              className="p-3 -mt-12 bg-slate-800 rounded-full"
            />
            <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
              Brand Recognition
            </h3>
            <p className="text-slate-400 text-base max-lg:text-center max-lg:max-w-md">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>
          {/*  */}
          <article className="bg-white p-5 max-lg:flex flex-col justify-center items-center rounded z-10">
            <img
              src={records}
              alt=""
              className="p-3 -mt-12 bg-slate-800 rounded-full"
            />
            <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
              Detailed Records
            </h3>
            <p className="text-slate-400 text-base max-lg:text-center max-lg:max-w-md">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          {/*  */}
          <article className="bg-white max-lg:flex flex-col justify-center items-center p-5 rounded z-10">
            <img
              src={fully}
              alt=""
              className="p-3 -mt-12 over bg-slate-800 rounded-full"
            />
            <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">
              Fully Customizable
            </h3>
            <p className="text-slate-400 text-base max-lg:text-center max-lg:max-w-md">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Avanced;
