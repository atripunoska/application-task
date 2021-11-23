import React from 'react';
import FooterMenu from "./UI/FooterMenu";
import Logo from "../assets/images/Valtech-Logo-black.png";


const footerWidgets = [
    {
        title: "Footer Section Title",
        widgetLinks: [
            {
                id: "1",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "2",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "3",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "4",
                link: "#",
                linkText: "Footer link",
            },
        ],
    },
    {
        title: "Footer Section Title",
        widgetLinks: [
            {
                id: "5",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "6",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "7",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "8",
                link: "#",
                linkText: "Footer link",
            },
        ],
    },
    {
        title: "Footer Section Title",
        widgetLinks: [
            {
                id: "9",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "10",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "11",
                link: "#",
                linkText: "Footer link",
            },
            {
                id: "12",
                link: "#",
                linkText: "Footer link",
            },
        ],
    },
];

function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="Valtech" className="footer__logo" />

            <div className="footer__widgets">{displayWidgets()}</div>
        </footer>
    );

    function displayWidgets() {
        const footerWidgetsList = footerWidgets.map((widget) => (
            <FooterMenu
                title={widget.title}
                widgetLinks={widget.widgetLinks}
                key={Math.random()}
            ></FooterMenu>
        ));
        return footerWidgetsList;
    }
}

export default Footer;