import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div className='navigation'>
                <div className='container'>
                    <div className='acc-buttons'>
                        <span><NavLink to='login'>Zaloguj</NavLink></span>
                        <span><NavLink to='register'>Załóż konto</NavLink></span>
                    </div>
                    <div className='nav-buttons'>
                        <span><NavLink to='/'>Start</NavLink></span>
                        <span>O co chodzi?</span>
                        <span>O nas</span>
                        <span>Fundacje i organizacje</span>
                        <span>Kontakt</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation