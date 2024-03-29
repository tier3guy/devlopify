import Features from '../Features';
import Pricing from '../Pricing';
import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import './index.css';

const Hero = ({display, setDisplay}) => {

    useEffect(() => {
        document.title = "Home - devlopify";  
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const src = 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';


    const DB_URL = 'https://devlopify-e6b25-default-rtdb.asia-southeast1.firebasedatabase.app/';

    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('Sending your Request ...');
    const [showToast, setShowToast] = useState(false);

    const toggleToast = () => setShowToast(!showToast);

    const postPhoneNo = async (e) => {

        e.preventDefault();
        setShowToast(true);
        
        const response = await fetch(DB_URL + 'phones.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(phone)
        });
        setPhone('');

        if(response){
            setMessage("Request has been sent");
            setTimeout(() => setShowToast(false), 4000);       
        }
    }



    return (
        <>
            <Toast show={showToast} onClose={toggleToast} className="toastIndicator">
                <Toast.Body>{message}</Toast.Body>
            </Toast>
            <div className='main-wrapper' style={{marginTop: (display === 'none') ? '20vh' : '23vh', paddingBottom: '10vh'}}>
                <div className='w-75 m-auto d-flex hero'>
                    <div className='txt-wrapper'>
                        <h1 className='hero-txt c-dark'>
                            Needed a perfect <i>work-life</i> balance ? We have covered you in that.
                        </h1>
                        <p>
                            We at <i>devlopify</i> take your extra work and get your work done in time. Along with a minimum of <i>100+ hours monthly tech support</i>.
                        </p>
                        <p>We at <i>devlopify</i> create some amazing looking websites and trust me we charge <i>10x</i> times less than any other in the market.</p>
                        <p>Want to know more how ? 
                            <button className='link-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <a><i>Get a Call.</i></a>
                            </button>
                        </p>
                    </div>
                    <div>
                        <img className='img-hero' src={src} alt='img' />
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Give your contact, so that we can reach you ! 🚀</h5>
                            </div>
                            <div className="modal-body">
                                <input placeholder='+91 62903 06361' value={phone} onChange={ (e) => setPhone(e.target.value) }/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={postPhoneNo} className="btn btn-primary">Get a Call 😁</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            <Features/>
            <Pricing/>
        </>
    )
}

export default Hero;