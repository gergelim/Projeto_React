import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Distrito 028</Link>
        </div>
        <div className="navbar-links">
            <Link to="/favorites" className="nav-link">Favoritos</Link>
        </div>
    </nav>
}

export default NavBar