import Image from "next/image";
import { Email } from "./components/Email";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experiences";
import { FeaturedProjects } from "./components/Projects";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" mx-[10%] " >
      <Hero />
      <AboutMe/>
      <Experience/>
      <FeaturedProjects/>
      </div>
      <SocialLinks />
      <Email />
    </div>
  );
}
