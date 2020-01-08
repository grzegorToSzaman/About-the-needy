import React, {Component} from "react";

class Summary extends Component {
    previous = () => {
        this.props.changeStep(4);
    };
    handleResetClick = () => {
        this.props.reset();
    };
    render() {
        const {
            numberOfBags,
            what,
            whoHelp,
            localization,
            street,
            city,
            zipCode,
            mobile,
            date,
            hour,
            comments
        } = this.props.mainState;
        return (
            <div className='step-five'>
                <h4>Podsumowanie Twojej darowizny:</h4>
                <h5>Oddajesz:</h5>
                <div className="things">
                    <img src="./assets/Icon-1.svg" alt="icon"/>
                    <h5>{numberOfBags} worki, {what.join(", ")}, {whoHelp.join(", ")}</h5>
                </div>
                <div className="localization">
                    <img src="./assets/Icon-4.svg" alt="icon"/>
                    <h5>dla lokalizacji: {localization}</h5>
                </div>
                <div className='columns'>
                    <div className="column">
                        <h5>Adres odbioru:</h5>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="street">Ulica</label>
                            </div>
                            <div className='col-75'>
                                <p>{street}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="city">Miasto</label>
                            </div>
                            <div className='col-75'>
                                <p>{city}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="zipCode">Kod<br/>pocztowy</label>
                            </div>
                            <div className='col-75'>
                                <p>{zipCode}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="mobile">Numer<br/>telefonu</label>
                            </div>
                            <div className='col-75'>
                                <p>{mobile}</p>
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
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="hour">Godzina</label>
                            </div>
                            <div className='col-75'>
                                <p>{hour}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="comments">Uwagi<br/>dla kuriera</label>
                            </div>
                            <div className='col-75'>
                                <p>{comments}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={this.previous}>Wstecz</button>
                <button onClick={this.handleResetClick}>Potwierdzam</button>
            </div>
        )
    }
}

export default Summary;