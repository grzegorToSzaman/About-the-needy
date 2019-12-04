import React, {Component} from 'react';
import Header from "./HomeComponents/Header";
import ThreeColumns from "./HomeComponents/ThreeColumns";
import FourSteps from "./HomeComponents/FourSteps";
import GiveThings from "./HomeComponents/GiveThings";
import AboutUs from "./HomeComponents/AboutUs";
import Helping from "./HomeComponents/Helping";
import Contact from "./HomeComponents/Contact";
import Footer from "./HomeComponents/Footer";

class Home extends Component {
    render() {
        return(
            <>
                <Header />
                <ThreeColumns />
                <FourSteps />
                <GiveThings />
                <AboutUs />
                <Helping />
                <Contact />
                <Footer />
            </>
        )
    }
}

export default Home