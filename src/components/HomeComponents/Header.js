import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
// import Link from "react-scroll";


import {Link} from 'react-scroll';


class Header extends Component {
    render() {
        return(
            <header>
                <div className='container'>
                    <div className='navigation__buttons'>
                        <div>
                            <NavLink to='login'><span>Zaloguj</span></NavLink>
                            <NavLink to='register'><span>Załóż konto</span></NavLink>
                        </div>
                        <div className='hamburger'>X</div>
                        <div>
                            <ul>
                                <li>Start</li>
                                <li><Link to='four--steps' spy={true} smooth={true} duration={1000}>O co chodzi?</Link></li>
                                <li><Link to='about-us' spy={true} smooth={true} duration={1000}>O nas</Link></li>
                                <li><Link to='helping' spy={true} smooth={true} duration={1000}>Fundacja i organizacje</Link></li>
                                <li>Kontakt</li>
                            </ul>
                        </div>
                    </div>
                    <div className='header__intro'>
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src='./assets/Decoration.svg' alt="decoration"/>
                        <div className='buttons'>
                            <div>
                                <NavLink to='/login'>ODDAJ<br/>RZECZY</NavLink>
                            </div>
                            <div>
                                <NavLink to='/login'>ZORGANIZUJ<br/>ZBIÓRKĘ</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header