import AiChatWidget from "@/pages/AiChat";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="fixed left-8 bottom-0 flex flex-col items-center space-y-6 text-lg text-lightSlate">
      {/* <a href="https://github.com/pradeeshTech" target="_blank" className="hover:text-green"> */}
      {/* </a> */}
      <a href="https://github.com/pradeeshTech" target="_blank" className="hover:text-green"><FaGithub /></a>
      {/* <a href="https://instagram.com" className="hover:text-green"><FaInstagram /></a> */}
      {/* <a href="https://twitter.com" className="hover:text-green"><FaTwitter /></a> */}
      <a href="https://www.linkedin.com/in/pradeesh-a-7b73aa262" target="_blank" className="hover:text-green"><FaLinkedin /></a>
      <div className="w-[1px] h-24 bg-slate mt-6"></div>
    </div>
  );
};
