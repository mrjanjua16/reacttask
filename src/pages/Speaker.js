import React from "react";
import OurSpeaker from "../components/Speaker/OurSpeaker";
import Speakers from "../components/Speaker/Speakers";
import "../scss/components/_no-background.scss"
import Newsletter from "../components/Home1/Newsletter";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";

export default function Speaker()
{
    return(
        <>
            <OurSpeaker />
            <Speakers />
            <Newsletter />
            <Map />
            <Footer />
            <FooterMain />
        </>
    );
}