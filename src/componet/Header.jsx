import { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from '../firebase'; // Import Firebase auth
import { signOut } from 'firebase/auth';
import { ThemeContext } from '../Context/ThemeContext';
import { useAuthState } from 'react-firebase-hooks/auth'; // To get user authentication state

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [user] = useAuthState(auth); // Check if user is logged in

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      });
  };

  return (
    <header className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} body-font transition-all duration-500 ease-in-out animate-fade-in`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full transform transition-transform duration-300 hover:rotate-12"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">B-StOrE</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-indigo-600 transition-colors duration-300">Home</Link>
          <Link to="/products" className="mr-5 hover:text-indigo-600 transition-colors duration-300">Product</Link>
          <Link to="/aboutus" className="mr-5 hover:text-indigo-600 transition-colors duration-300">About Us</Link>
          <Link to="/contactus" className="mr-5 hover:text-indigo-600 transition-colors duration-300">Contact Us</Link>

          <button 
            onClick={() => setTheme(theme === 'light' ? "dark" : "light")}
            className="mr-5 px-3 py-1 bg-indigo-400 text-white rounded hover:bg-indigo-600 focus:outline-none transition-colors duration-300"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>
        
        {user ? (  // Show logout button if user is logged in
          <button
            onClick={handleLogout}
            className="inline-flex items-center text-white bg-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 transition-transform duration-300 transform hover:scale-105 rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <Link to="/login" className="inline-flex items-center text-white bg-indigo-400 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 transition-transform duration-300 transform hover:scale-105 rounded text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
