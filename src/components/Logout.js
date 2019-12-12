import React, {Component} from 'react';
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";

class Logout extends Component {
    render() {
        return (
            <>
                <Navigation />
                <section className='logout-window'>
                    <div className='container'>
                        <div className='logout'>
                            <h1>Wylogowanie nastąpiło pomyślnie</h1>
                            <img src="/assets/Decoration.svg" alt="decoration"/>
                        </div>
                        <div className='buttons'>
                            <span><NavLink to='/'>Strona główna</NavLink></span>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Logout