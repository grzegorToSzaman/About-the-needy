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
                    id='goodWear'
                    type="checkbox"
                    name='goodWear'
                    onChange={this.changeState}
                    checked={goodWear}
                />
                <label htmlFor="goodWear">ubrania, które nadają się do ponownego użycia</label>
                <br/>
                <input
                    id='badWear'
                    type="checkbox"
                    name='badWear'
                    onChange={this.changeState}
                    checked={badWear}
                />
                <label htmlFor="badWear">ubrania, do wyrzucenia</label>
                <br/>
                <input
                    id='toys'
                    type="checkbox"
                    name='toys'
                    onChange={this.changeState}
                    checked={toys}
                />
                <label htmlFor="toys">zabawki</label>
                <br/>
                <input
                    id='books'
                    type="checkbox"
                    name='books'
                    onChange={this.changeState}
                    checked={books}
                />
                <label htmlFor="books">książki</label>
                <br/>
                <input
                    id='others'
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

export default Step1;