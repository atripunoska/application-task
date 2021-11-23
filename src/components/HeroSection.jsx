import React from 'react';
import { Email } from "react-obfuscate-email";

function HeroSection() {
    return (
        <section id="sectionOne" className="hero">
            <h1 className="hero__title">Section One</h1>

            <div className="hero__overlay">
                <Email email="mk.contact@valtech.com" className="hero__button">
                    <span>Contact</span>
                </Email>
                <p className="hero__text">Lorem ipsum dolor sit, amet consectetur</p>
            </div>
        </section>
    );
}

export default HeroSection;