import React, {Component} from 'react';
import foundations from '../../lists/foundations'
import organizations from "../../lists/organizations";
import locals from "../../lists/locals";

class Locals extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: 3
    };
    render() {
        return (
            <div>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                {locals.map((local, i) => {
                    return (
                        <div className='one-position' key={i}>
                            <h1>{local.name}</h1>
                            <p>{local.description}</p>
                            <div className='clear'/>
                            <h5>{local.items}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class Organizations extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: 3
    };
    render() {
        return (
            <div>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                {organizations.map((organization, i) => {
                    return (
                        <div className='one-position' key={i}>
                            <h1>{organization.name}</h1>
                            <p>{organization.description}</p>
                            <div className='clear'/>
                            <h5>{organization.items}</h5>
                        </div>
                    )
                })}
            </div>
        );
    }
}

class Foundations extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: 3
    };
    handleClick = (e, i) => {
        this.setState({
            currentPage: i
        })
    };
    render() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(foundations.length / this.state.elementsPerPage); i++) {
            const a = <li key={i} onClick={e => this.handleClick(e, i)}>{i}</li>;
            pageNumbers.push(a);
        }
        const indexOfLast = this.state.currentPage * this.state.elementsPerPage;
        const indexOfFirst = indexOfLast - this.state.elementsPerPage;
        const currentElements = foundations.slice(indexOfFirst, indexOfLast);
        return (
            <div>
                <p className='description'>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
                <div className='positions'>
                    {currentElements.map((foundation, i) => {
                            return(
                                <div className='one-position' key={i}>
                                    <h1>{foundation.name}</h1>
                                    <p>{foundation.items}</p>
                                    <div className='clear'/>
                                    <h5>{foundation.mission}</h5>
                                </div>
                            )
                        }
                    )}
                </div>
                <ul className='numbers'>
                    {pageNumbers.length !== 1 && pageNumbers}
                </ul>
            </div>
        )
    }
}

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
                    <Foundations />
                </div>
            </section>
        )
    }
}

export default Helping