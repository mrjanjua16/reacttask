import React from "react";
import Speakers from "../components/Speaker/Speakers";
import "../scss/components/_no-background.scss"
import Newsletter from "../components/Home1/Newsletter";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import PageAbout from "../components/Main/PageAbout";

export default function Speaker()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "OUR SPEAKER", active: true }
        ];
    
        return(
            <>
            <PageAbout title="OUR SPEAKER" sectionItem={sectionItem} />
            <Speakers />
            <Newsletter />
            <Map />
            <Footer />
            <FooterMain />
        </>
    );
}