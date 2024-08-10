import { useState } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import '../App.css';

function Navbar() {
    const [activeLink, setActiveLink] = useState("/");
    const [searchParams] = useSearchParams();
    const courseType = searchParams.get('course');

    const handleLinkClick = (path) => {
        if (path === "/" || courseType?.length === 0) {
            setActiveLink("/");
        } else {
            setActiveLink(courseType);
        }
    };

    return (
        <nav id="master_head" className="navbar bg-body-tertiary navbar-expand-lg site-header">
            <Link
                to="/"
                className={activeLink === "/home" ? "active" : ""}
                onClick={() => handleLinkClick("/")}
            >
                All
            </Link>
            <Link
                to="/course/fsd?course=fsd"
                className={activeLink === "/fsd" ? "active" : ""}
                onClick={() => handleLinkClick("/fsd")}
            >
                FULL STACK DEVELOPMENT
            </Link>
            <Link
                to="/course/ds?course=ds"
                className={activeLink === "/ds" ? "active" : ""}
                onClick={() => handleLinkClick("/ds")}
            >
                DATA SCIENCE
            </Link>
            <Link
                to="/course/cbs?course=cbs"
                className={activeLink === "/cbs" ? "active" : ""}
                onClick={() => handleLinkClick("/cbs")}
            >
                CYBER SECURITY
            </Link>
            <Link
                to="/course/career?course=career"
                className={activeLink === "/career" ? "active" : ""}
                onClick={() => handleLinkClick("/career")}
            >
                CAREER
            </Link>
        </nav>
    );
}

export default Navbar;
