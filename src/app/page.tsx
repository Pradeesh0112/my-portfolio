import { Email } from "./components/Email";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experiences";
import { Projects } from "./components/Projects";
import FeaturedProjects from "./components/Feature";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mx-[10%]">
        <section id="hero"><Hero /></section>
        <section id="about" className="scroll-mt-20"><AboutMe /></section>
        <section id="experience" className="scroll-mt-20"><Experience /></section>
        <section id="work" className="scroll-mt-20"><Projects /></section>
        <section id="featured" className="scroll-mt-20"><FeaturedProjects /></section>
        <section id="contact" className="scroll-mt-20"><Contact /></section>
      </div>
      <aside>
        <SocialLinks />
        <Email />
      </aside>
    </main>
  );
}
