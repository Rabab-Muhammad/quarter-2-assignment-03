import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-center bg-slate-700 text-slate-50 py-2 mt-6">
      <p>&#169; 2024 ShopSphere Website. All rights reserved.</p>
      <div>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:rababmuhammadhussain@gmail.com"
            className="hover:text-green-500"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>

          <a
            href="https://github.com/Rabab-Muhammad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500"
          >
            <FaGithub className="h-6 w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/rabab-muhammad-35913b1b8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
