import React, {Component} from "react";

class Step4 extends Component {
    previous = () => {
        this.props.changeStep(3);
    };
    render() {
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
                                <input type="text" id="street" name="street"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="city">Miasto</label>
                            </div>
                            <div className='col-75'>
                                <input type="text" id="city" name="city"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="zipCode">Kod<br/>pocztowy</label>
                            </div>
                            <div className='col-75'>
                                <input type="text" id="zipCode" name="zipCode"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="mobile">Numer<br/>telefonu</label>
                            </div>
                            <div className='col-75'>
                                <input type="text" id="mobile" name="mobile"/>
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
                                <input type="date" id="date" name="date"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="hour">Godzina</label>
                            </div>
                            <div className='col-75'>
                                <input type="number" name="hour" id="hour"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="uwagi">Uwagi<br/>dla kuriera</label>
                            </div>
                            <div className='col-75'>
                                <textarea name="uwagi" id="uwagi" cols="20" rows="5"/>
                            </div>
                        </div>
                    </div>

                </div>

                <br/>
                <button onClick={this.previous}>Wstecz</button>
                <button>Dalej</button>
            </div>
        );
    }
}

export default Step4;