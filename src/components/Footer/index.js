import {useState} from 'react';
import './index.css';
import Toast from 'react-bootstrap/Toast';

const Footer = () => {

    const DB_URL = 'https://devlopify-e6b25-default-rtdb.asia-southeast1.firebasedatabase.app/';

    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('Sending your Request ...');
    const [showToast, setShowToast] = useState(false);

    const toggleToast = () => setShowToast(!showToast);

    const postMail = async (e) => {

        e.preventDefault();
        setShowToast(true);
        
        const response = await fetch(DB_URL + 'mails.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mail)
        });
        setMail('');

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
            
            <div className='main-wrapper bg-dark'>
                <footer id='footer' className='w-75 center justify-between m-auto'>
                    <div>
                        <h1 className='c-white'>devlopify</h1>
                        <p className='c-white'>let's build the future <i>india</i> together.</p>
                        <form method='POST'>
                            <div className='send-mail'>
                                <input type={'email'} placeholder='enter your email here' value={mail} onChange={(e) => setMail(e.target.value)}/>
                                <button type='submit' className='btn-primary send shadow-none' onClick={postMail}>
                                    <i class="fa-solid fa-arrow-right c-white"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='connect-the-founder'>
                        <h2 className='c-purple'>Connect with the founder</h2>
                        <p className='c-white'>avinash@devlopify<i>.tech</i></p>
                        <p className='c-white'>+91 62903 06361</p>
                        <a className='social-media-icons' target={'_blank'} href='https://www.instagram.com/devlopify/' rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                        <a className='social-media-icons' target={'_blank'} href='https://www.linkedin.com/company/devlopify/' rel="noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a className='social-media-icons' target={'_blank'} href='https://twitter.com/devlopify?t=yGxukK5W-8idknfFzExWkw&s=08' rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </footer>
                <div className='w-75 center justify-between m-auto footer-down'>
                    <p className='c-white'>© 2023 <i>devlopify</i> Inc. All rights have been reserved.</p>
                    <p className='c-white'>Terms & Conditions. Privacy Policy</p>
                </div>
            </div>
        </>
    );
}

export default Footer;