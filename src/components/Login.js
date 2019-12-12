import React, {Component} from 'react';
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <>
                <Navigation />
                <div className='container'>
                    <div className='login'>
                        <h1>Zaloguj się</h1>
                        <img src="/assets/Decoration.svg" alt="decoration"/>
                        <form>
                            <p>E-mail</p>
                            <input type="text"/>
                            <p>Hasło</p>
                            <input type="password"/>
                        </form>
                    </div>
                    <div className='buttons'>
                        <span><NavLink to='register'>Załóż konto</NavLink></span>
                        <span>Zaloguj się</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Login