import React, {Component} from 'react';

class AboutUs extends Component {
    render() {
        return(
            <section className='about-us'>
                <div className='container'>
                    <div className='text'>
                        <h1>O nas</h1>
                        <img src="/assets/Decoration.svg" alt="decoration"/>
                        <p>
                            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                        </p>
                        <img src="/assets/Signature.svg" alt="Signature"/>
                    </div>
                    <div className='foto'/>
                </div>
            </section>
        )
    }
}

export default AboutUs