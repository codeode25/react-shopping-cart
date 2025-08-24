import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const MainNavbar: React.FC = () => {
    return (
        <nav className="w-full bg-white/60 backdrop-blur-md fixed top-0 left-0 z-50">
            <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
                <Link to="/" className="font-bold text-lg">
                    My Shop
                </Link>
                <Link to="/cart" className="relative cursor-pointer">
                    <FaShoppingCart className="text-xl"/>
                    <span 
                        className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full px-1.5"
                    >
                        0
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default MainNavbar;