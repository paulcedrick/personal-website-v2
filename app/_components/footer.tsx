import { FaGithub, FaLinkedin, FaThreads, FaXTwitter } from "react-icons/fa6";

type FooterProps = {};
function Footer(props: FooterProps) {
  return (
    <footer className="flex flex-col gap-4">
      <p className="text-xs font-semibold">You can follow me here</p>
      <div className="flex gap-8">
        <a className="group flex items-center gap-2 text-[#aaa]" href="#">
          <FaGithub size="24px" className="group-hover:text-[#fff]" />
          <span className="text-xs underline group-hover:text-[#fff]">
            Github
          </span>
        </a>

        <a className="group flex items-center gap-2 text-[#aaa]" href="#">
          <FaLinkedin size="24px" className="group-hover:text-[#fff]" />
          <span className="text-xs underline group-hover:text-[#fff]">
            LinkedIn
          </span>
        </a>

        <a className="group flex items-center gap-2 text-[#aaa]" href="#">
          <FaXTwitter size="24px" className="group-hover:text-[#fff]" />
          <span className="text-xs underline group-hover:text-[#fff]">X</span>
        </a>

        <a className="group flex items-center gap-2 text-[#aaa]" href="#">
          <FaThreads size="24px" className="group-hover:text-[#fff]" />
          <span className="text-xs underline group-hover:text-[#fff]">
            Threads
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
