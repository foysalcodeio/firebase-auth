import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-blue-500 w-full p-4 flex justify-around text-white text-xl">
            <Link className="bg-violet-500 p-3 rounded-lg" to="/">Home</Link>
            <Link className="bg-green-500 p-3 rounded-xl" to="/login">Login</Link>
        </div>
    );
};

export default Header;




