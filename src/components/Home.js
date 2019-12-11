import React, {Component} from 'react';
import Header from "./HomeComponents/Header";
import ThreeColumns from "./HomeComponents/ThreeColumns";
import FourSteps from "./HomeComponents/FourSteps";
import AboutUs from "./HomeComponents/AboutUs";
import Helping from "./HomeComponents/Helping";
import Footer from "./HomeComponents/Footer";

class Home extends Component {
    render() {
        return(
            <>
                <Header />
                <ThreeColumns />
                <FourSteps />
                <AboutUs />
                <Helping />
                <Footer />
            </>
        )
    }
}

export default Home