import React, {Component} from "react";

class Step4 extends Component {
    previous = () => {
        this.props.changeStep(3);
    };
    next = () => {
        this.props.changeStep(5);
    };
    handleInput = e => {
        this.props.method(e.target.name, e.target.value)
    };
    render() {
        const {street, city, zipCode, mobile, date, hour, comments} = this.props.mainState;
        return (
            <div className="step-four">
                <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
                <div className='columns'>
                    <div className="column">
                        <h5>Adres odbioru:</h5>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="street">Ulica</label>
                            </div>
                            <div className='col-75'>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    onChange={this.handleInput}
                                    value={street}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="city">Miasto</label>
                            </div>
                            <div className='col-75'>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    onChange={this.handleInput}
                                    value={city}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="zipCode">Kod<br/>pocztowy</label>
                            </div>
                            <div className='col-75'>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    onChange={this.handleInput}
                                    value={zipCode}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="mobile">Numer<br/>telefonu</label>
                            </div>
                            <div className='col-75'>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    onChange={this.handleInput}
                                    value={mobile}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <h5>Termin odbioru:</h5>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="date">Data</label>
                            </div>
                            <div className='col-75'>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    onChange={this.handleInput}
                                    value={date}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="hour">Godzina</label>
                            </div>
                            <div className='col-75'>
                                <input
                                    type="number"
                                    name="hour"
                                    id="hour"
                                    onChange={this.handleInput}
                                    value={hour}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="comments">Uwagi<br/>dla kuriera</label>
                            </div>
                            <div className='col-75'>
                                <textarea
                                    name="comments"
                                    id="comments"
                                    rows="5"
                                    onChange={this.handleInput}
                                    value={comments}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <br/>
                <button onClick={this.previous}>Wstecz</button>
                <button onClick={this.next}>Dalej</button>
            </div>
        );
    }
}

export default Step4;