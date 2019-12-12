import React, {Component} from 'react';
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";

class Register extends Component {
    state = {
        email: '',
        password: '',
        secondPassword: '',
        emailError: false,
        passwordError: false,
        secondPasswordError: false
    };
    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    register = () => {
        const {email, password, secondPassword} = this.state;
        let errorCounter = 0;

        function validateEmail(em) {
            let re = /\S+@\S+\.\S+/;
            return re.test(em);
        }

        if (validateEmail(email) === false) {
            this.setState({emailError: true});
            errorCounter++;
        } else {
            this.setState({emailError: false});
        }

        if (password.length < 6) {
            this.setState({passwordError: true});
            errorCounter++;
        } else {
            this.setState({passwordError: false});
        }

        if (password !== secondPassword) {
            this.setState({secondPasswordError: true});
            errorCounter++;
        } else {
            this.setState({secondPasswordError: false});
        }

        if (errorCounter === 0) {
            console.log('POSZŁO!');
            this.setState({
                email: '',
                password: '',
                secondPassword: ''
            })
        }
    };
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
                                <h5>E-mail</h5>
                                <input
                                    style={{borderBottom: this.state.emailError ? '1px solid red' : null}}
                                    type="text"
                                    name='email'
                                    onChange={this.handleInput}
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
                                    onChange={this.handleInput}
                                    value={this.state.password}
                                />
                                <p className={this.state.passwordError ? 'visible' : 'hidden'}>
                                    Podane hasło jest za krótkie!
                                </p>
                                <h5>Powtórz hasło</h5>
                                <input
                                    style={{borderBottom: this.state.secondPasswordError ? '1px solid red' : null}}
                                    type="password"
                                    name='secondPassword'
                                    onChange={this.handleInput}
                                    value={this.state.secondPassword}
                                />
                                <p className={this.state.secondPasswordError ? 'visible' : 'hidden'}>
                                    Podane hasło jest nieprawidłowe
                                </p>
                            </form>
                        </div>
                        <div className='buttons'>
                            <span><NavLink to='login'>Zaloguj się</NavLink></span>
                            <span onClick={this.register}>Załóż konto</span>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

export default Register