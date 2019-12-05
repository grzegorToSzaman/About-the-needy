import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class FourSteps extends Component {
    render() {
        return(
            <section className='four--steps'>
                <div className='container'>
                    <h1>Wystarczą 4 proste kroki</h1>
                    <img src="/assets/Decoration.svg" alt="decoration" className='decoration'/>
                    <div className='steps'>
                        <div className='step'>
                            <img src="/assets/Icon-1.svg" alt="icon"/>
                            <h5>Wybierz rzeczy</h5>
                            <div className='line'/>
                            <h5>ubrania, zabawki, sprzęt i inne</h5>
                        </div>
                        <div className='step'>
                            <img src="/assets/Icon-2.svg" alt="icon"/>
                            <h5>Spakuj je</h5>
                            <div className='line'/>
                            <h5>skorzystaj z worków na śmieci</h5>
                        </div>
                        <div className='step'>
                            <img src="/assets/Icon-3.svg" alt="icon"/>
                            <h5>Zdecyduj komu chcesz pomóc</h5>
                            <div className='line'/>
                            <h5>wybierz zaufane miejsce</h5>
                        </div>
                        <div className='step'>
                            <img src="/assets/Icon-4.svg" alt="icon"/>
                            <h5>Zamów kuriera</h5>
                            <div className='line'/>
                            <h5>kurier przyjedzie w dogodnym terminie</h5>
                        </div>
                    </div>

                    <div className='give-away'>
                        <NavLink to='login'>
                        <h1>ODDAJ</h1>
                        <h1>RZECZY</h1>
                        </NavLink>
                    </div>

                </div>
            </section>
        )
    }
}

export default FourSteps