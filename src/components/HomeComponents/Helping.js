import React, {Component} from 'react';
import foundations from '../../lists/foundations'
import organizations from "../../lists/organizations";
import locals from "../../lists/locals";

class Locals extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: 3
    };
    changePage = (e, i) => {
        this.setState({currentPage: i})
    };
    render() {
        const {currentPage, elementsPerPage} = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(locals.length / elementsPerPage); i++) {
            const element = <li
                            key={i}
                            onClick={e => this.changePage(e, i)}
                            className={this.state.currentPage === i ? 'selected' : ''}>
                                {i}
                            </li>;
            pageNumbers.push(element);
        }
        const lastOfIndex = currentPage * elementsPerPage;
        const firstOfIndex = lastOfIndex - 3;
        const currentElements = locals.slice(firstOfIndex, lastOfIndex);
        return (
            <div>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className='positions'>
                    {currentElements.map((local, i) => {
                        return (
                            <div className='one-position' key={i}>
                                <h1>{local.name}</h1>
                                <p>{local.items.join(', ')}</p>
                                <div className='clear'/>
                                <h5>{local.description}</h5>
                            </div>
                        )
                    })}
                </div>
                <ul className='numbers'>
                    {pageNumbers.length !== 1 && pageNumbers}
                </ul>
            </div>
        )
    }
}

class Organizations extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: 3
    };
    changePage = (e, i) => {
        this.setState({currentPage: i})
    };
    render() {
        const {currentPage, elementsPerPage} = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(organizations.length / elementsPerPage); i++) {
            const element = <li
                                key={i}
                                onClick={e => this.changePage(e, i)}
                                className={this.state.currentPage === i ? 'selected' : ''}>
                                    {i}
                                </li>;
            pageNumbers.push(element);
        }
        const lastOfIndex = currentPage * elementsPerPage;
        const firstOfIndex = lastOfIndex - 3;
        const currentElements = organizations.slice(firstOfIndex, lastOfIndex);
        return (
            <div>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className='positions'>
                    {currentElements.map((organization, i) => {
                        return (
                            <div className='one-position' key={i}>
                                <h1>{organization.name}</h1>
                                <p>{organization.items.join(', ')}</p>
                                <div className='clear'/>
                                <h5>{organization.description}</h5>
                            </div>
                        )
                    })}
                </div>
                <ul className='numbers'>
                    {pageNumbers.length !== 1 && pageNumbers}
                </ul>
            </div>
        );
    }
}

class Foundations extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: 3
    };
    changePage = (e, i) => {
        this.setState({
            currentPage: i
        })
    };
    render() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(foundations.length / this.state.elementsPerPage); i++) {
            const a = <li
                        key={i}
                        onClick={e => this.changePage(e, i)}
                        className={this.state.currentPage === i ? 'selected' : ''}>
                             {i}
                    </li>;
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
                                    <p>{foundation.items.join(', ')}</p>
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
        foundationsWindow: true,
        organizationsWindow: false,
        localsWindow: false,
    };
    showFoundations = () => {
        this.setState({
            foundationsWindow: true,
            organizationsWindow: false,
            localsWindow: false,
        })
    };
    showOrganizations = () => {
        this.setState({
            foundationsWindow: false,
            organizationsWindow: true,
            localsWindow: false,
        })
    };
    showLocals = () => {
        this.setState({
            foundationsWindow: false,
            organizationsWindow: false,
            localsWindow: true,
        })
    };
    render() {
        let toRender;
        if (this.state.foundationsWindow) {
            toRender = <Foundations />
        } else if (this.state.organizationsWindow) {
            toRender = <Organizations />
        } else {
            toRender = <Locals />
        }
        return(
            <section className='helping'>
                <div className='container'>
                    <h1>Komu pomagamy?</h1>
                    <img src="/assets/Decoration.svg" alt="decoration"/>
                    <div className='who-help'>
                        <div onClick={this.showFoundations} className={this.state.foundationsWindow ? 'active' : ''}><p>Fundacjom</p></div>
                        <div onClick={this.showOrganizations} className={this.state.organizationsWindow ? 'active' : ''}><p>Organizacjom pozarządowym</p></div>
                        <div onClick={this.showLocals} className={this.state.localsWindow ? 'active' : ''}><p>Lokalnym zbiórkom</p></div>
                    </div>
                    <div>
                        {toRender}
                    </div>
                </div>
            </section>
        )
    }
}

export default Helping