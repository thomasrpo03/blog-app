import Logo from "./logo";
import { ThemeToggler } from "./theme-toggler";

const Navbar = () => {
  return (
    <nav className="flex lg:px-20 md:px-10 px-6 py-2 justify-between items-center shadow-lg shadow-primary-foreground">
      <Logo />
      <ThemeToggler />
    </nav>
  );
};
export default Navbar;
