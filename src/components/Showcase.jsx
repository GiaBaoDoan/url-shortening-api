import showcase from "../assets/images/illustration-working.svg";
const Showcase = () => {
  return (
    <section className="max-width py-10">
      <div className="container grid grid-cols-2 gap-10 max-md:grid-cols-1 flex-col-reverse place-items-center">
        <article>
          <img src={showcase} alt="Shortly" />
        </article>
        <article>
          <h1 className="md:text-6xl text-slate-800 font-bold max-md:text-center max-md:text-4xl text-5xl">
            More than just shorter links
          </h1>
          <p className="text-slate-400 lg:text-lg max-md:mt-2 mb-10 max-md:text-center">
            Build your brand’s recognition and get detailed insights on how your
            links are performing. Get Started
          </p>
          <div className="max-md:flex justify-center">
            <button className="btn-cta rounded-full">Get Started</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Showcase;
