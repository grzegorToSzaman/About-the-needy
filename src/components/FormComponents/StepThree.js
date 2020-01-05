import React, {Component} from 'react'

class Step3 extends Component {
    state = {
        whoHelp: [...this.props.helping]
    };
    changeLocalization = e => {
        this.props.localization(e.target.value);
    };
    handleChange = e => {
        if (e.target.checked) {
            this.setState({whoHelp: [...this.state.whoHelp, e.target.value]}, () => {
                this.props.method(this.state.whoHelp);
            });

        } else {
            const helps = [...this.state.whoHelp];
            helps.splice(helps.indexOf(e.target.value), 1);
            this.setState({whoHelp: helps}, () => {
                this.props.method(this.state.whoHelp);
            });
        }


    };
    next = () => {
        this.props.changeStep(4);
    };
    previous = () => {
        this.props.changeStep(2);
    };
    render() {
        return (
            <div className="step-three">
                <h3>Lokalizacja:</h3>
                <br/>
                <select onChange={this.changeLocalization}>
                    <option value="0">— wybierz —</option>
                    <option value="Poznań">Poznań</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Wrocław">Wrocław</option>
                    <option value="Katowice">Katowice</option>
                    <option value="Gdańsk">Gdańsk</option>
                </select>
                <br/>
                <h5>Komu chcesz pomóc?</h5>
                <form onChange={this.handleChange}>
                    <label>
                        <input
                            type="checkbox"
                            name='whoHelp'
                            value='dzieciom'
                            checked={[...this.state.whoHelp].indexOf('dzieciom') !== -1}
                        />
                        <span>dzieciom</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='whoHelp'
                            value='samotnym matkom'
                            checked={[...this.state.whoHelp].indexOf('samotnym matkom') !== -1}
                        />
                        <span>samotnym matkom</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='whoHelp'
                            value='bezdomnym'
                            checked={[...this.state.whoHelp].indexOf('bezdomnym') !== -1}
                        />
                        <span>bezdomnym</span>
                    </label>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name='whoHelp'
                            value='niepełnosprawnym'
                            checked={this.state.whoHelp.indexOf('niepełnosprawnym') !== -1}
                        />
                        <span>niepełnosprawnym</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='whoHelp'
                            value='osobom starszym'
                            checked={this.state.whoHelp.indexOf('osobom starszym') !== -1}
                        />
                        <span>osobom starszym</span>
                    </label>
                </form>

                <button onClick={this.previous}>Wstecz</button>
                <button onClick={this.next}>Dalej</button>
            </div>

        )
    }
}

export default Step3;