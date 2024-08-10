import { useEffect, useState } from 'react';
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
            setActiveLink(`/course/${courseType}?course=${courseType}`);
        }
    };

    useEffect(() => {
        if (!courseType) {
            handleLinkClick("/");
        } else {
            handleLinkClick(courseType)
        }
    }, [courseType])

    return (
        <nav id="master_head" className="navbar bg-body-tertiary navbar-expand-lg site-header">
            <Link
                to="/"
                className={activeLink === "/" ? "active" : ""}
                onClick={() => handleLinkClick("/")}
            >
                All
            </Link>
            <Link
                to="/course/fsd?course=fsd"
                className={activeLink === "/course/fsd?course=fsd" ? "active" : ""}
                onClick={() => handleLinkClick("/fsd")}
            >
                FULL STACK DEVELOPMENT
            </Link>
            <Link
                to="/course/ds?course=ds"
                className={activeLink === "/course/ds?course=ds" ? "active" : ""}
                onClick={() => handleLinkClick("/ds")}
            >
                DATA SCIENCE
            </Link>
            <Link
                to="/course/cbs?course=cbs"
                className={activeLink === "/course/cbs?course=cbs" ? "active" : ""}
                onClick={() => handleLinkClick("/cbs")}
            >
                CYBER SECURITY
            </Link>
            <Link
                to="/course/career?course=career"
                className={activeLink === "/course/career?course=career" ? "active" : ""}
                onClick={() => handleLinkClick("/career")}
            >
                CAREER
            </Link>
        </nav>
    );
}

export default Navbar;
