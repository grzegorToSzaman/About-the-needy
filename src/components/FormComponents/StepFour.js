import React, {Component} from "react";

class Step4 extends Component {
    previous = () => {
        this.props.changeStep(3);
    };
    render() {
        return (
            <div className="step-four">
                <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
                <div className="column">
                    <h5>Adres odbioru:</h5>
                    <label htmlFor="street">Ulica</label>
                    <input type="text" id="street" name="street"/>
                    <br/>
                    <label htmlFor="city">Miasto</label>
                    <input type="text" id="city" name="city"/>
                    <br/>
                    <label htmlFor="zipCode">Kod<br/>pocztowy</label>
                    <input type="text" id="zipCode" name="zipCode"/>
                    <br/>
                    <label htmlFor="mobile">Numer<br/>telefonu</label>
                    <input type="text" id="mobile" name="mobile"/>
                </div>
                <div className="column">
                    <h5>Termin odbioru:</h5>
                    <label htmlFor="date">Data</label>
                    <input type="date" id="date" name="date"/>
                    <br/>
                    <label htmlFor="hour">Godzina</label>
                    <input type="number" name="hour" id="hour"/>
                    <br/>
                    <label htmlFor="uwagi">Uwagi<br/>dla kuriera</label>
                    <textarea name="uwagi" id="uwagi" cols="20" rows="5"/>
                </div>
                <br/>
                <button onClick={this.previous}>Wstecz</button>
                <button>Dalej</button>
            </div>
        );
    }
}

export default Step4;