import boostDesktop from "../assets/images/bg-boost-desktop.svg";
import boostMobile from "../assets/images/bg-boost-mobile.svg";
const Boost = () => {
  return (
    <section className="boost relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={boostDesktop} />
        <img src={boostMobile} alt="bgMobile" />
      </picture>
      <div className="boost-inner w-full flex items-center flex-col">
        <h2 className="text-white font-bold mb-10 max-md:text-2xl text-center lg:text-4xl">
          Boost your links today
        </h2>
        <button className="btn-cta rounded-full font-bold max-md:text-base text-xl !py-4 !px-10">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Boost;
