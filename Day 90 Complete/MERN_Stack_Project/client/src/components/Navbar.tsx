import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow">
                {/* Left Nav Links */}
                <div className="flex space-x-6 items-center">
                    <Link to="/" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500">
                        Home
                    </Link>
                    <Link to="/about" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500">
                        About
                    </Link>
                    <Link to="/contact" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500">
                        Contact
                    </Link>
                    <Link to="/help" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500">
                        Help
                    </Link>
                </div>

                {/* Right: Theme Toggle + Explore Button */}
                <div className="flex items-center space-x-4">

                    {/* Explore Dashboard */}
                    <Link
                        to="/dashboard"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Explore Dashboard
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
