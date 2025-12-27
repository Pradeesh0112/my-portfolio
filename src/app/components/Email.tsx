import AiChatWidget from "@/pages/AiChat";

export const Email = () => {
  return (
    <div className=" fixed w-[20px] flex-col items-end bottom-0 right-[40px] flex font-mono text-lightSlate " >
      <AiChatWidget />
      <a  target="_blank"
 href="https://mail.google.com/mail/?view=cm&fs=1&to=pradeesharumugam96@gmail.com"  className=" hover:text-green rotate-90 origin-bottom-right mx-[10px] my-6 " > pradeesharumugma96@gmail.com</a>
      <div className=" h-24 w-[1px] bg-slate  " >
      </div>
    </div>
  );
};
