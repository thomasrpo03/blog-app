import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to={"/"} className="flex flex-col justify-center items-center space-y-[-0.3875rem] text-primary font-logo">
        <h2 className="font-bold md:text-3xl text-2xl italic">&lt; Tech Tales /&gt;</h2>
        <p className="self-end text-xs font-semibold">By Thom</p>
    </Link>
  )
}
export default Logo