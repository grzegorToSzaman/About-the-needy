import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Link} from 'react-scroll';


class FormHeader extends Component {
    render() {
        return(
            <header className='form--header'>
                <div className='container'>
                    <div className='navigation__buttons'>
                        <div>
                            <span>Cześć username</span>
                            <NavLink to='form'><span>Oddaj rzeczy</span></NavLink>
                            <NavLink to='logout'><span>Wyloguj</span></NavLink>
                        </div>
                        <div className='hamburger'>X</div>
                        <div>
                            <ul>
                                <li><NavLink to='/'>Start</NavLink></li>
                                <li>O co chodzi?</li>
                                <li>O nas</li>
                                <li>Fundacja i organizacje</li>
                                <li>Kontakt</li>
                            </ul>
                        </div>
                    </div>
                    <div className='form--header__intro'>
                        <p>Oddaj rzeczy, których już nie chcesz</p>
                        <p>POTRZEBUJĄCYM</p>
                        <img src='./assets/Decoration.svg' alt="decoration"/>
                        <p>Wystarczą 4 proste kroki:</p>
                        <div className='squares'>
                            <div className='square'>
                                <h5>1</h5>
                                <p>Wybierz<br/>rzeczy</p>
                            </div>
                            <div className='square'>
                                <h5>2</h5>
                                <p>Spakuj je<br/>w worki</p>
                            </div>
                            <div className='square'>
                                <h5>3</h5>
                                <p>Wybierz<br/>fundację</p>
                            </div>
                            <div className='square'>
                                <h5>4</h5>
                                <p>Zamów<br/>kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default FormHeader