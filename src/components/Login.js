import React, {Component} from 'react';
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";

class Login extends Component {
    state = {
        email: '',
        password: '',
        emailError: false,
        passwordError: false,
    };
    hadleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    };
    logIn = () => {
        const {email, password} = this.state;
        let errorCounter = 0;

        function validateEmail(em) {
            let re = /\S+@\S+\.\S+/;
            return re.test(em);
        }

        if (validateEmail(email) === false) {
            this.setState({emailError: true});
            errorCounter++
        } else {
            this.setState({emailError: false});
        }

        if (password.length < 6) {
            this.setState({passwordError: true});
            errorCounter++
        } else {
            this.setState({passwordError: false});
        }

        if (errorCounter === 0) {
            console.log('POSZŁO!');
            this.setState({
                email: '',
                password: ''
            })
        }
    };
    render() {
        return (
            <>
                <Navigation />
                <section className='login-window'>
                    <div className='container'>
                        <div className='login'>
                            <h1>Zaloguj się</h1>
                            <img src="/assets/Decoration.svg" alt="decoration"/>
                            <form>
                                <h5>E-mail</h5>
                                <input
                                    style={{borderBottom: this.state.emailError ? '1px solid red' : null}}
                                    type="text"
                                    name='email'
                                    onChange={this.hadleInput}
                                    value={this.state.email}
                                />
                                <p className={this.state.emailError ? 'visible' : 'hidden'}>
                                    Podany email jest nieprawidłowy!
                                </p>
                                <h5>Hasło</h5>
                                <input
                                    style={{borderBottom: this.state.passwordError ? '1px solid red' : null}}
                                    type="password"
                                    name='password'
                                    onChange={this.hadleInput}
                                    value={this.state.password}
                                />
                                <p className={this.state.passwordError ? 'visible' : 'hidden'}>
                                    Podane hasło jest za krótkie!
                                </p>
                            </form>
                        </div>
                        <div className='buttons'>
                            <span><NavLink to='register'>Załóż konto</NavLink></span>
                            <span onClick={this.logIn}>Zaloguj się</span>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

export default Login