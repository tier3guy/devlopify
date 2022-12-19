import './index.css';
import Card from '../PricingCard';
import { useState, useEffect } from 'react';

const dataWeb = [
    {
        name: 'Basic',
        pricing: 999,
        support: [
            "Static Website",
            "Tech Stack - HTML, CSS, JS"
        ]
    },
    {
        name: 'Active',
        pricing: 1499,
        support: [
            "Static Website",
            "Tech Stack - HTML, CSS, JS",
            "Database with Firestore by Google",
            "Email support"
        ]
    },
    {
        name: 'Advance',
        pricing: 2999,
        support: [
            "Dynamic Website",
            "Tech Stack - React",
            "Database with Firestore by Google",
            "Email support",
            "Help center access"
        ],
        active: true
    },
    {
        name: 'Pro',
        pricing: 4999,
        support: [
            "Dynamic Website",
            "Tech Stack - MERN",
            "Database with MongoDB",
            "Email support",
            "Help center access"
        ]
    },
];

const dataMobile = [
    {
        name: 'Advanced',
        pricing: 4999,
        support: [
            "Tech Stack - React Native",
            "Database with MongoDB",
            "Email support",
            "Help center access"
        ],
        active: true
    },
    {
        name: 'Pro',
        pricing: 9999,
        support: [
            "Tech Stack - React Native",
            "Database with MongoDB",
            "Light Weight",
            "Acess to Native Modules",
            "Email support",
            "Help center access"
        ]
    },
];

const PricingComponent = () => {

    useEffect(() => {
        document.title = "Pricings - devlopify"; 
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); 
    }, []);

    const [data, setData] = useState(dataWeb);

    return (
        <>
            <div className='main-wrapper pb-5'>
                <div className='w-75 m-auto pricing-component'> 
                    <h1>Simple, transparent pricing</h1>
                    <p>No contracts, No suprise fees</p>
                    <div className='plan-switcher mt-3'>
                        <button onClick={() => setData(dataWeb)} className='btn btn-primary btn-switcher m-2'>Web Applications</button>
                        <button onClick={() => setData(dataMobile)} className='btn btn-primary btn-switcher m-2'>Mobile Applications</button>
                    </div> 
                </div>
                
                <main>
                    <div className='pricing-cards-wrapper'>
                        {
                            data.map((ele) => <Card height={"350px"} data={ele}/> )
                        }
                    </div>
                </main>
            </div>
        </>
    )
}

export default PricingComponent;