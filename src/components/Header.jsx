import React, {useState, useEffect} from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../assets/images/Valtech-Logo-black@2x.png";

function Header() {

    const [
        isScrollValueMoreThanHeaderHeight,
        setIsScrollValueMoreThanHeaderHeight,
    ] = useState(false);

    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollValueMoreThanHeaderHeight(window.scrollY > 90);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <header
            className={`header ${
                isScrollValueMoreThanHeaderHeight === true ? "sticky" : ""
            }`}
        >
            <nav className="flex flex-jc-sb flex-ai-c">
                <img src={Logo} alt="Valtech" className="header__logo"/>

                <div
                    className={`header__menu d-none-lg  ${navbarOpen ? "open" : ""}`}
                    onClick={handleToggle}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`header__links  ${navbarOpen ? "showMenu" : ""}`}>
                    <AnchorLink href="#sectionOne">Section 1</AnchorLink>
                    <AnchorLink href="#sectionTwo">Section 2</AnchorLink>
                    <AnchorLink href="#sectionThree">Section 3</AnchorLink>
                    <AnchorLink href="#sectionFour">Section 4</AnchorLink>
                </div>
                <div className={`header__form ${navbarOpen ? "showMenu" : ""}`}>
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder="Type text here..."
                        className="header__input"
                    />
                    <button type="submit" className="header__button">
                        search
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;