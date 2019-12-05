import React, {Component} from 'react';
import {Element} from 'react-scroll'

class ThreeColumns extends Component {
    render() {
        return (
            <section className='threeColumns'>
                <div className='container'>
                    <div className='box'>
                        <h1>10</h1>
                        <h3>Oddanych worków</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div><div className='box'>
                        <h1>5</h1>
                        <h3>wspartych organizacji</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div><div className='box'>
                        <h1>7</h1>
                        <h3>zorganizowanych zbiórek</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>

                </div>
            </section>
        )
    }
}

export default ThreeColumns