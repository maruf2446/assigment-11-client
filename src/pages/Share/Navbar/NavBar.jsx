import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Prividers/AuthProvider";


const NavBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }

    const navitems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/alltoy">All Toys</Link></li>
        { user?.email ? <li><button onClick={handleLogOut}>Log Out</button></li>
         : <li><Link to="/login" className="btn btn-outline">Login</Link></li>
        }
        
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-strokeLinecap="round" stroke-strokeLinejoin="round" stroke-strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="h-14" src="https://img.freepik.com/free-vector/orange-setting-gradient-logo-design-template_474888-1876.jpg?w=740&t=st=1685641946~exp=1685642546~hmac=85c3e445a4d29bba8b842daa5de84c485da9fd3894404e5bd0ee5f7a298e0881" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end">
            <li><Link className="btn btn-outline" to="/signup">Sign Up</Link></li>
            </div>
        </div>
    );
};

export default NavBar;