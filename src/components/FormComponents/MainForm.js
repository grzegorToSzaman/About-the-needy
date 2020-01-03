import React, {Component} from 'react';

class Step1 extends Component {
    changeState = e => {
        this.props.method(e.target.name, e.target.checked);
    };
    handleClick = () => {
        this.props.changeStep(2);
    };
    render() {
        const {goodWear, badWear, toys, books, others} = this.props.checked;
        return (
            <div className='step-one'>

                    <h3>Zaznacz co chcesz oddać:</h3>
                    <input
                        type="checkbox"
                        name='goodWear'
                        onChange={this.changeState}
                        checked={goodWear}
                    />
                    <label htmlFor="goodWear">ubrania, które nadają się do ponownego użycia</label>
                    <br/>
                    <input
                        type="checkbox"
                        name='badWear'
                        onChange={this.changeState}
                        checked={badWear}
                    />
                    <label htmlFor="badWear">ubrania, do wyrzucenia</label>
                    <br/>
                    <input
                        type="checkbox"
                        name='toys'
                        onChange={this.changeState}
                        checked={toys}
                    />
                    <label htmlFor="toys">zabawki</label>
                    <br/>
                    <input
                        type="checkbox"
                        name='books'
                        onChange={this.changeState}
                        checked={books}
                    />
                    <label htmlFor="books">książki</label>
                    <br/>
                    <input
                        type="checkbox"
                        name='others'
                        onChange={this.changeState}
                        checked={others}
                    />
                    <label htmlFor="others">inne</label>
                <br/>
                <button onClick={this.handleClick}>Dalej</button>
            </div>
        )
    }
}

class MainForm extends Component {
    state = {
        step: 1,
        goodWear: false,
        badWear: false,
        toys: false,
        books: false,
        others: false,

    };
    changeStep = step => {
        this.setState({step: step});
    };
    changeState = (name, value) => {
        this.setState({[name]: value});
    };
    render() {
        return (
            <div className='main-form'>
                <div className='container'>
                    <div className='orange-belt'>
                        <h3>Ważne!</h3>
                        <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                    </div>
                    <div className='steps'>
                        <p>Krok {this.state.step}/4</p>
                        <Step1 method={this.changeState} checked={this.state} changeStep={this.changeStep}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainForm