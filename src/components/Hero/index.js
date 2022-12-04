import Features from '../Features';
import Pricing from '../Pricing';

import './index.css';

const Hero = () => {

    const src = 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

    return (
        <>
            <div className='main-wrapper h-100'>
                <div className='w-75 m-auto d-flex hero'>
                    <div className='txt-wrapper'>
                        <h1 className='hero-txt c-dark'>
                            Boost your <i>audience</i> reach through your own customized website.
                        </h1>
                        <p>
                            We at <i>devlopify</i> create some amazing looking websites and trust me we charge <i>10x</i> times less than any other in the market.
                        </p>
                        <p>Want to know more how ? <a href='/'><i>Get a Call.</i></a> </p>
                    </div>
                    <div>
                        <img className='img-hero' src={src} alt='img' />
                    </div>
                </div>
            </div>
            <Features/>
            <Pricing/>
        </>
    )
}

export default Hero;