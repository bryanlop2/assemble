import { Link } from "react-router-dom"
import './Navbar.css';

const NavBar = () => {
    return (
        <div className="elements-navBar">
        <Link to="/login">Login</Link>
        <Link to="/users">Home Users</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/about">About</Link>
        <Link to="/logout">Logout</Link>

        </div>
    )
}

export default NavBar
