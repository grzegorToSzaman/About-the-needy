import React, {Component} from 'react';

class Footer extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        nameError: false,
        emailError: false,
        messageError: false,
        formDone: false,
    };
    formSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;
        let errorCounter = 0;

        function validateEmail(em) {
            let re = /\S+@\S+\.\S+/;
            return re.test(em);
        }

        if (name.length === 0) {
            this.setState({nameError: true});
            errorCounter++
        } else {
            this.setState({nameError: false});
        }

        if (validateEmail(email) === false) {
            this.setState({emailError: true});
            errorCounter++
        } else {
            this.setState({emailError: false});
        }

        if (message.length < 120) {
            this.setState({messageError: true});
            errorCounter++
        } else {
            this.setState({messageError: false});
        }

        if (errorCounter === 0) {
            this.setState({
                formDone: true,
                name: '',
                email: '',
                message: ''
            });
            const newContact = {
                name: name,
                email: email,
                message: message
            };
            const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
            fetch(url,{
                headers:{
                    "Content-Type": "application/json"
                },
                method:"POST",
                body:JSON.stringify(newContact)
            }).then(r=>{
                console.log(r)
            }).catch(err=>{
                console.warn(err)
            })

        } else {
            this.setState({formDone: false});
        }
    };
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    render() {
        return (
            <section className='contactForm'>
                <div className='container'>
                    <div className='contact'>
                        <h1>Skontaktuj się z nami</h1>
                        <img src="/assets/Decoration.svg" alt="decoration"/>
                        <h4 className={this.state.formDone ? 'visible' : 'hidden'}>
                            Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.
                        </h4>
                        <div className='form'>
                            <form onSubmit={this.formSubmit}>
                                <div className='name'>
                                    <h5>Wpisz swoje imię:</h5>
                                    <input
                                        style={{borderBottom: this.state.nameError ? '1px solid red' : null}}
                                        type="text"
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        placeholder='Krzysztof'
                                    />
                                    <p className={this.state.nameError ? 'visible' : 'hidden'}>
                                        Podane imię jest nieprawidłowe!
                                    </p>
                                </div>
                                <div className='email'>
                                    <h5>Wpisz swój email:</h5>
                                    <input
                                        style={{borderBottom: this.state.emailError ? '1px solid red' : null}}
                                        type="text"
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        placeholder='abc@xyz.pl'
                                    />
                                    <p className={this.state.emailError ? 'visible' : 'hidden'}>
                                        Podany email jest nieprawidłowy!
                                    </p>
                                </div>
                                <div className='clear'/>
                                <h5>Wpisz swoją wiadomość:</h5>
                                <textarea
                                    style={{borderBottom: this.state.messageError ? '1px solid red' : null}}
                                    name="message"
                                    rows='6'
                                    value={this.state.message}
                                    onChange={this.onChange}
                                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                />
                                <p className={this.state.messageError ? 'visible' : 'hidden'}>
                                    Wiadomość musi mieć conajmniej 120 znaków!
                                </p>
                                <input type="submit" value='Wyślij'/>
                            </form>
                        </div>
                    </div>
                    <footer>
                        <p>Copyright by CodersLab</p>
                    </footer>
                </div>

            </section>
        )
    }
}


export default Footer