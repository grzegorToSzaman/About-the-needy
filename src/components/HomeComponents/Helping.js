import React, {Component} from 'react';
import fundacje from '../../lists/foundations'
import organizacje from "../../lists/organizations";
import lokalne from "../../lists/local";

console.log(lokalne);
class Helping extends Component {
    state = {
        fundationsWindow: true,
        organizationsWindow: false,
        localWindow: false,
    };

    render() {

        return(
            <section className='helping'>
                <div className='container'>
                    <h1>Komu pomagamy?</h1>
                    <img src="/assets/Decoration.svg" alt="decoration"/>
                    <div className='who-help'>
                        <div>Fundacjom</div>
                        <div>Organizacjom<br/>pozarządowym</div>
                        <div>Lokalnym<br/>zbiórkom</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Helping