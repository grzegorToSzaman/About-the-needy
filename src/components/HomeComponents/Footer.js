import React, {Component} from 'react';

class Footer extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };
    formSubmit = e => {
        e.preventDefault();

    };
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='contact'>
                        <h1>Skontaktuj się z nami</h1>
                        <img src="/assets/Decoration.svg" alt="decoration"/>
                        <h4>Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</h4>
                        <div className='form'>
                            <form onSubmit={this.formSubmit}>
                                <div className='name'>
                                    <h5>Wpisz swoje imię:</h5>
                                    <input type="text" name='name' value={this.state.name} onChange={this.onChange}/>
                                    <p>Podane imię jest nieprawidłowe!</p>
                                </div>
                                <div className='email'>
                                    <h5>Wpisz swój email:</h5>
                                    <input type="email" name='email' value={this.state.email} onChange={this.onChange}/>
                                    <p>Podany email jest nieprawidłowy!</p>
                                </div>
                                <div className='clear'/>
                                <h5>Wpisz swoją wiadomość:</h5>
                                <textarea name="message" rows='6' value={this.state.message} onChange={this.onChange} placeholder='adfsdfasdfsdfasdf'/>
                                <p>Wiadomość musi mieć conajmniej 120 znaków!</p>
                                <input type="submit" value='Wyślij'/>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer