import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex p-5 border-b-2 ">
            <h1 className="hover:text-[#f1356d] text-4xl align-middle">
                <Link to="/">Relic Motors</Link>
            </h1>
            <div className="ml-auto hover:text-[#f1356d] text-xl align-middle">
                <Link to="/">Home</Link>
            </div>
        </nav>
    );
};

export default Navbar;
