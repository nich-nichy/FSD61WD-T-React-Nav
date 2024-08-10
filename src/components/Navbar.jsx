import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <nav id="master_head" className="navbar bg-body-tertiary navbar-expand-lg site-header">
            <Link
                to="/"
                className={activeLink === "/" ? "active" : ""}
            >
                All
            </Link>
            <Link
                to="/course/fsd"
                className={activeLink === "/course/fsd" ? "active" : ""}
            >
                FULL STACK DEVELOPMENT
            </Link>
            <Link
                to="/course/ds"
                className={activeLink === "/course/ds" ? "active" : ""}
            >
                DATA SCIENCE
            </Link>
            <Link
                to="/course/cbs"
                className={activeLink === "/course/cbs" ? "active" : ""}
            >
                CYBER SECURITY
            </Link>
            <Link
                to="/course/career"
                className={activeLink === "/course/career" ? "active" : ""}
            >
                CAREER
            </Link>
        </nav>
    );
}

export default Navbar;
