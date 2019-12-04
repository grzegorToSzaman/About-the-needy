import React, {Component} from 'react';
import NavLink from "react-router-dom";
import Link from "react-scroll";

class Header extends Component {
    render() {
        return <h1>Header</h1>
    }
}

class ThreeColumns extends Component {
    render() {
        return <h1>3columns</h1>
    }
}

class FourSteps extends Component {
    render() {
        return <h1>FourSteps</h1>
    }
}

class GiveThings extends Component {
    render() {
        return <h1>GiveThings</h1>
    }
}

class AboutUs extends Component {
    render() {
        return <h1>About us</h1>
    }
}

class Helping extends Component {
    render() {
        return <h1>Helping</h1>
    }
}

class Contact extends Component {
    render() {
        return <h1>contact</h1>
    }
}

class Footer extends Component {
    render() {
        return <h1>footer</h1>
    }
}

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