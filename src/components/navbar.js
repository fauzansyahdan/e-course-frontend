import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-blue-600">GoEdu</h1>
        </div>

        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-500 font-medium">
            Home
          </Link>
          <Link to="/courses" className="hover:text-blue-500 font-medium">
            Courses
          </Link>
          <Link to="/about" className="hover:text-blue-500 font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500 font-medium">
            Contact
          </Link>
        </div>
      </div>

      <div className="space-x-4">
        <Link
          to="/login"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
