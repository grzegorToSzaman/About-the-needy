import React, {Component} from "react";

class Step4 extends Component {
    previous = () => {
        this.props.changeStep(3);
    };
    render() {
        return (
            <div className="step-four">
                <h1>sdfdsfasf</h1>
                <button onClick={this.previous}>Wstecz</button>
                <button>Dalej</button>
            </div>
        );
    }
}

export default Step4;