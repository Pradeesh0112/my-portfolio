/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export const AboutMe = () => {
    return (
        <section
            id="about"
            className="max-w-5xl mx-auto px-6 grid md:grid-cols-[3fr_2fr] gap-12 items-center  "
        >
            {/* Left Content */}
            <div>
                <div className="relative flex items-center  w-full mb-10 whitespace-nowrap">
                    <h2 className="numbered-heading font-semibold text-lightestSlate mb-3 text-[clamp(26px,5vw,32px)] leading-[1.1]">
                        <span className="text-green  font-mono font-[500] text-[24px] " >01.</span>  About Me
                    </h2>
                    <div className="w-full h-[0.2px] bg-slate ml-6" ></div>
                </div>

                <div className="space-y-4 text-lightSlate font-sans text-xl leading-[1.3]">
                    <p>
                        Hi! I am <span className="text-lightestSlate">Pradeesh</span> and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom themes — which taught me a lot about HTML & CSS!
                    </p>
                    <p>
                        Today, I&apos;m a  <span className="text-green">Front-End Developer</span>{" "}
                        with <span className="text-green">2.10+ years of experience</span>{" "} focused on building {" "}
                        <span className="text-green">accessible</span>,{" "} and <span className="text-green">inclusive</span>,{" "} digital experiences.
                        {/*  */}
                        I specialize in <span className="text-green">React.js</span>,{" "} and <span className="text-green">Next.js</span>,{" "} development, delivering <span className="text-green">efficient</span>,{" "}<span className="text-green">scalable</span>,{" "} and user-friendly web solutions.

                    </p>
                    <p>
                        Here are a few technologies I&apos;ve been working with recently:
                    </p>
                </div>

                {/* Tech List */}
                <ul className="grid grid-cols-3 gap-x-6 gap-y-3 mt-6 text-sm font-mono text-slate-300
               max-[900px]:grid-cols-2
               max-[400px]:grid-cols-1">

                    {[
                        { name: "JS (ES6+)", icon: "js" },
                        { name: "TypeScript", icon: "ts" },
                        { name: "React", icon: "react" },
                        { name: "Node.js", icon: "nodejs" },
                        { name: "Vue.js", icon: "vue" },
                        { name: "Git", icon: "git" },
                        { name: "Next.js", icon: "nextjs" },
                        { name: "TailwindCSS", icon: "tailwind" },
                        { name: "Firebase", icon: "firebase" },
                    ].map((tech) => (
                        <li
                            key={tech.name}
                            className="flex items-center gap-2 before:content-['▹'] before:text-green-400"
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                                width={18}
                                height={18}
                                alt={tech.name}
                            />
                            <span className="whitespace-nowrap text-xs sm:text-sm">
                                {tech.name}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>

            {/* Right Side Image */}
            <div className="relative !z-30 max-w-xs mx-auto">
                <div className="relative group h-[280px] w-[300px] max-[600px]:h-[240px] max-[600px]:w-[260px]  ">
                    {/* Image */}
                    <Image src="/assets/me.jpeg" alt="me" className="relative z-20 rounded-md filter grayscale contrast-100 brightness-90
                 transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]
                 group-hover:-translate-y-3 group-hover:-translate-x-3
                 group-hover:grayscale-0 h-[100%] cursor-pointer w-[100%] object-cover " width={400} height={400} />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-green/20 rounded-md mix-blend-multiply 
                    group-hover:bg-transparent transition duration-500 z-10"></div>

                    {/* Border effect */}
                    <div className="absolute group-hover:-inset-2 group-hover:border-2 border-green rounded-md
                    translate-x-0 translate-y-0
                    group-hover:translate-x-4 group-hover:translate-y-4
                    transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]
                    z-0"></div>
                </div>
            </div>

        </section>
    );
};
