import React from 'react';

function ContactSection() {
    return (
        <section id="sectionFour" className="contact">
            <h1 className="contact__title">Section Four</h1>
            <form className="contact__form">
                <h3 className="contact__form_title">Contact Us</h3>
                <div className="contact__form_wrapper">
                    <div className="col">
                        <label htmlFor="firstName" className="contact__label">
                            First Name
                        </label>
                        <input type="text" className="contact__input" id="firstName" />
                    </div>
                    <div className="col">
                        <label htmlFor="lastName" className="contact__label">
                            Last Name
                        </label>
                        <input type="text" className="contact__input" id="lastName" />
                    </div>
                    <div className="col">
                        <label htmlFor="emailInput" className="contact__label">
                            Email address
                        </label>
                        <input type="email" className="contact__input" id="emailInput" />
                    </div>
                    <div className="col">
                        <label htmlFor="phoneNumberInput" className="contact__label">
                            Phone number
                        </label>
                        <input
                            type="email"
                            className="contact__input"
                            id="phoneNumberInput"
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="yourMessageInput" className="contact__label">
                            Your message
                        </label>
                        <textarea
                            className="contact__input"
                            id="yourMessageInput"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <div className="col flex flex-jc-fe flex-ai-fe">
                        <button className="contact__button">Send</button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default ContactSection;