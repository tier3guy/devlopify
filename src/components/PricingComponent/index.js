import './index.css';

const PricingComponent = () => {

    const src = 'https://images.unsplash.com/photo-1611095785020-1ba3dd228ea7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVhbHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

    return (
        <>
            <div className='main-wrapper'>
                <div className='w-75 m-auto pricing-component'> 
                    <h1>Simple, transparent pricing</h1>
                    <p>No contracts, No suprise fees</p>
                    <div className='plan-switcher mt-3'>
                        <button className='btn btn-primary btn-switcher m-2'>Web Applications</button>
                        <button className='btn btn-primary btn-switcher m-2'>Mobile Applications</button>
                    </div>             
                </div>
            </div>
        </>
    )
}

export default PricingComponent;