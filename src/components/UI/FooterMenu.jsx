import React from "react";

function FooterMenu(props) {
    return (
        <div className="footer__menu">
            <h4 className="footer__menu-name">{props.title}</h4>
            <ul className="footer__menu-list">{displayListItems()}</ul>
        </div>
    );

    function displayListItems() {
        const listItems = props.widgetLinks.map((widget) => (
            <li key={widget.id}>
                <a href={widget.link}> {widget.linkText}</a>
            </li>
        ));
        return listItems;
    }
}

export default FooterMenu;
