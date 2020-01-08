import React, {Component} from 'react';

class Step1 extends Component {
    state = {
        toGive: [],
    };
    changeState = e => {
        this.props.method(e.target.name, e.target.checked);
        const toGive = [...this.state.toGive];
        if (e.target.checked) {
            toGive.push(e.target.value)
        } else {
            toGive.splice(toGive.indexOf(e.target.value), 1)
        }
        this.setState({toGive: toGive}, () => {
            this.props.changeWhat(toGive);
        })

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
                    id='goodWear'
                    type="checkbox"
                    name='goodWear'
                    onChange={this.changeState}
                    checked={goodWear}
                    value="ubrania, które nadają się do ponownego użycia"
                />
                <label htmlFor="goodWear">ubrania, które nadają się do ponownego użycia</label>
                <br/>
                <input
                    id='badWear'
                    type="checkbox"
                    name='badWear'
                    onChange={this.changeState}
                    checked={badWear}
                    value="ubrania, do wyrzucenia"
                />
                <label htmlFor="badWear">ubrania, do wyrzucenia</label>
                <br/>
                <input
                    id='toys'
                    type="checkbox"
                    name='toys'
                    onChange={this.changeState}
                    checked={toys}
                    value="zabawki"
                />
                <label htmlFor="toys">zabawki</label>
                <br/>
                <input
                    id='books'
                    type="checkbox"
                    name='books'
                    onChange={this.changeState}
                    checked={books}
                    value="książki"
                />
                <label htmlFor="books">książki</label>
                <br/>
                <input
                    id='others'
                    type="checkbox"
                    name='others'
                    onChange={this.changeState}
                    checked={others}
                    value="inne"
                />
                <label htmlFor="others">inne</label>
                <br/>
                <button onClick={this.handleClick}>Dalej</button>
            </div>
        )
    }
}

export default Step1;