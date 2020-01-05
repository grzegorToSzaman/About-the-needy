import React, {Component} from "react";

class Step2 extends Component {
    numberOfBags = e => {
        this.props.method(e.target.value)
    };
    next = () => {
        this.props.changeStep(3)
    };
    previous = () => {
        this.props.changeStep(1)
    };
    render() {
        return (
            <div className="step-two">

                <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                <span>Liczba 60l worków:</span>
                <select name="" id="" onChange={this.numberOfBags} value={this.props.bags}>
                    <option value="">— wybierz —</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br/>
                <button onClick={this.previous}>Wstecz</button>
                <button onClick={this.next}>Dalej</button>


            </div>
        )
    }
}

export default Step2;