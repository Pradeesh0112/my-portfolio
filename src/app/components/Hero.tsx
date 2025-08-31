/* eslint-disable react/no-unescaped-entities */
export const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-start px-12 bg-navy">
      <p className="text-green font-mono mb-4">Hi, my name is</p>

      <h1 className="text-4xl sm:text-6xl font-bold text-lightestSlate big-heading">
        Pradeesh
      </h1>

      <h2 className="text-3xl sm:text-5xl font-bold text-slate mt-2 big-heading text-[32px] ">
        I build things for the web.
      </h2>

      <p className="max-w-lg text-lightSlate mt-6 leading-relaxed text-lg ">
        Frontend Developer specializing in complex logic operations and performance optimization. Currently focused on building accessible, human-centered products at Ardens Business Solutions. 
        <a href="https://abshrms.in" className="text-green"> Abshrms</a>.
      </p>

      <a
        href="#projects"
        className="mt-10 border border-green px-6 py-3 rounded-base text-green hover:bg-green hover:text-navy transition duration-300"
      >
        Check out my projects!
      </a>
    </section>
  );
};
