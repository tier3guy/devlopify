import {useState} from 'react';
import './index.css';

const Footer = () => {

    const [mail, setMail] = useState('');

    return (
        <>
            <div className='main-wrapper bg-dark'>
                <footer id='footer' className='w-75 center justify-between m-auto'>
                    <div>
                        <h1 className='c-white'>devlopify</h1>
                        <p className='c-white'>let's build the future <i>india</i> together.</p>
                        <div className='send-mail'>
                            <input placeholder='enter your email here' value={mail} onChange={(e) => setMail(e.target.value)}/>
                            <button className='btn-primary send shadow-none'>
                                <i class="fa-solid fa-arrow-right c-white"></i>
                            </button>
                        </div>
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

export default Footer