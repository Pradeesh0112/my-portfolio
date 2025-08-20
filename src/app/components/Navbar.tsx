export const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center px-8 py-6 bg-navy shadow-md z-50">
      <div className="text-green font-mono text-lg">AP</div>

      <div className=" flex justify-end items-center " >
        <ul className="flex space-x-8 text-sm font-mono text-lightSlate mx-[26px]">
          <li className="hover:text-green transition"><span className="text-green " >01.</span>  About</li>
          <li className="hover:text-green transition"><span className="text-green " >02.</span> Experience</li>
          <li className="hover:text-green transition"><span className="text-green " >03.</span> Work</li>
          <li className="hover:text-green transition"><span className="text-green " >04.</span> Contact</li>
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[15px] text-xs font-mono leading-none text-green border border-green rounded-md py-3 px-4 bg-transparent no-underline transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] hover:-translate-y-[3px] hover:translate-x-[-5px] hover:shadow-[3px_3px_0_0_#64ffda]"
        >
          Resume
        </a>

      </div>


    </nav>
  );
};
