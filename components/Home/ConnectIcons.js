import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ConnectIcons = () => {
  return (
    <div className="fixed top-1/2 left-4  transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4 border-2 border-white bg-[#484651] p-2 rounded-full shadow-lg">
        <a
          href="https://github.com/ABRO-515"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/rasil-abro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rasilabro515@gmail.com"
          className="text-white hover:text-black text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default ConnectIcons;
