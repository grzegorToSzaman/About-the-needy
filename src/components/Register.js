import React, {Component} from 'react';
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <>
                <Navigation />
                <section className='register-window'>
                    <div className='container'>
                        <div className='register'>
                            <h1>Załóż konto</h1>
                            <img src="/assets/Decoration.svg" alt="decoration"/>
                            <form>
                                <p>E-mail</p>
                                <input type="text"/>
                                <p>Hasło</p>
                                <input type="password"/>
                                <p>Powtórz hasło</p>
                                <input type="password"/>
                            </form>
                        </div>
                        <div className='buttons'>
                            <span><NavLink to='login'>Zaloguj się</NavLink></span>
                            <span>Załóż konto</span>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

export default Register