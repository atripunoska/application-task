import React from 'react';

function TeaserCard(props) {
    return (
        <article className="teasers__item">
            <div className="teasers__card">
                <div className="teasers__image">
                    <img src={props.img} alt="" />
                </div>
                <div className="teasers__content">
                    <div className="teasers__title">{props.title}</div>
                    <div className="teasers__description">{props.desc}</div>

                    <button className="teasers__button">Read More</button>
                </div>
            </div>
        </article>
    );
}

export default TeaserCard;