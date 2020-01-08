import React, {Component} from 'react';
import Step1 from "./StepOne";
import Step2 from "./StepTwo";
import Step3 from "./StepThree";
import Step4 from "./StepFour";
import Summary from "./Summary";

class MainForm extends Component {
    state = {
        step: 5,
        goodWear: false,
        badWear: false,
        toys: false,
        books: false,
        others: false,
        what: [],
        numberOfBags: 0,
        localization: '',
        whoHelp: [],
        street: '',
        city: '',
        zipCode: '',
        mobile: '',
        date: '',
        hour: '',
        comments: ''
    };
    changeStep = step => {
        this.setState({step: step});
    };
    changeState = (name, value) => {
        this.setState({[name]: value});
    };
    changeBags = val => {
        let integer = parseInt(val);
        this.setState({numberOfBags: integer});
    };
    changeLocal = val => {
        this.setState({localization: val})
    };
    changeWhoHelp = val => {
        this.setState({whoHelp: val})
    };
    changeWhat = value => {
        this.setState({what: value})
    };
    render() {
        const textToOrangeBelt = [
            'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
            "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
            "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
            "Podaj adres oraz termin odbioru rzeczy."
        ];
        let toDisplay;
        switch (this.state.step) {
            case 1:
                toDisplay = <Step1
                    method={this.changeState}
                    checked={this.state}
                    changeStep={this.changeStep}
                    changeWhat={this.changeWhat}
                />;
                break;
            case 2:
                toDisplay = <Step2
                    method={this.changeBags}
                    changeStep={this.changeStep}
                    bags={this.state.numberOfBags}
                />;
                break;
            case 3:
                toDisplay = <Step3
                    localization={this.changeLocal}
                    method={this.changeWhoHelp}
                    helping={this.state.whoHelp}
                    changeStep={this.changeStep}
                    chosenLocal={this.state.localization}
                />;
                break;
            case 4:
                toDisplay = <Step4
                    changeStep={this.changeStep}
                    method={this.changeState}
                    mainState={this.state}
                />;
                break;
            case 5:
                toDisplay = <Summary
                    mainState={this.state}
                    changeStep={this.changeStep}
                />;
                break;
            default:
                toDisplay = <Step1
                    method={this.changeState}
                    checked={this.state}
                    changeStep={this.changeStep}
                />;
        }
        const orangeBelt =
            <div className='orange-belt'>
                <h3>Ważne!</h3>
                <p>{textToOrangeBelt[this.state.step - 1]}</p>
            </div>;

        return (
            <div className='main-form'>
                <div className='container'>
                    {this.state.step < 5 ? orangeBelt : null}
                    <div className='steps'>
                        {this.state.step < 5 ? <p>Krok {this.state.step}/4</p> : null}
                        {toDisplay}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainForm