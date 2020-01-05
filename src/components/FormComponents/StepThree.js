import React, {Component} from 'react'

class Step3 extends Component {
    state = {
        children: false,
        singleMothers: false,
        homeless: false,
        disabled: false,
        elders: false,
        whoHelp: []
    };
    changeLocalization = e => {
        this.props.localization(e.target.value);
    };
    handleChange = e => {
        if (e.target.checked) {
            this.setState({whoHelp: [...this.state.whoHelp, e.target.value]})
        } else {
            const helps = [...this.state.whoHelp];
            helps.splice(helps.indexOf(e.target.value), 1);
            this.setState({whoHelp: helps});
        }

    };
    render() {
        return (
            <div className="step-three">
                <h3>Lokalizacja:</h3>
                <br/>
                <select name="" id="" onChange={this.changeLocalization}>
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
                        <input type="checkbox" name='whoHelp' value='dzieciom'/>
                        <span>dzieciom</span>
                    </label>
                    <label>
                        <input type="checkbox" name='whoHelp' value='samotnym matkom'/>
                        <span>samotnym matkom</span>
                    </label>
                    <label>
                        <input type="checkbox" name='whoHelp' value='bezdomnym'/>
                        <span>bezdomnym</span>
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" name='whoHelp' value='niepełnosprawnym'/>
                        <span>niepełnosprawnym</span>
                    </label>
                    <label>
                        <input type="checkbox" name='whoHelp' value='osobom starszym'/>
                        <span>osobom starszym</span>
                    </label>
                </form>

                {/*<span>dzieciom</span>
                <span>samotnym matkom</span>
                <span>bezdomnym</span>
                <br/>
                <span>niepełnosprawnym</span>
                <span>osobom starszym</span>
                <br/>
                <button>Wstecz</button>
                <button>Dalej</button>*/}
            </div>

        )
    }
}

export default Step3;