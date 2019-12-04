import React, {Component} from 'react';
import NavLink from "react-router-dom";
// import Link from "react-scroll";

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Header extends Component {
    render() {
        return(
            <header>
                <h1>Header</h1>
            </header>
        )
    }
}

export default Header