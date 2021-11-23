import React from 'react';
import TeaserCard from "./UI/TeaserCard";
import img1 from "../assets/images/large-emerging technologies-1.png";
import img2 from "../assets/images/large-emerging technologies-2.png";
import img3 from "../assets/images/large-emerging technologies-3.png";
import img4 from "../assets/images/large-emerging technologies-4.png";

function TeasersSection() {
    return (
        <section id="sectionTwo" className="teasers">
            <h1 className="teasers__title">Section Two</h1>
            <div className="teasers__grid">
                <TeaserCard
                    title="Teaser 1"
                    img={img1}
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"
                />
                <TeaserCard
                    title="Teaser 2"
                    img={img2}
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <TeaserCard
                    title="Teaser 3"
                    img={img3}
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien."
                />
                <TeaserCard
                    title="Teaser 4"
                    img={img4}
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Vestibulum ante ipsum…"
                />
            </div>
        </section>
    );
}

export default TeasersSection;