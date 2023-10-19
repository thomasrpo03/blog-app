import { Link } from "react-router-dom";
import { footerSocials } from "../lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col-reverse md:flex-row lg:px-20 md:px-10 px-6 py-6 justify-between items-center bg-primary-foreground gap-y-4">
      <p className="text-base text-center">
        &copy; Developed by{" "}
        <span className="font-bold">Thomas Restrepo Orrego</span> -{" "}
        {currentYear}
      </p>
      {/* Social Icons */}
      <div className="flex justify-start gap-4">
        {footerSocials.map((item) => (
          <Link
            to={item.link}
            key={item.link}
            target="_blank"
            className="hover:scale-110 active:scale-95 transition"
          >
            <item.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
