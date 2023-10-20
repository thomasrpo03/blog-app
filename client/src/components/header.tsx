interface HeaderProps {
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => {
  return <h2 className="font-bold text-4xl">{label}</h2>;
};
export default Header;
