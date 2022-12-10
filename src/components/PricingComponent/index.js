import './index.css';

const PricingComponent = () => {

    return (
        <>
            <div className='main-wrapper pb-5'>
                <div className='w-75 m-auto pricing-component'> 
                    <h1>Simple, transparent pricing</h1>
                    <p>No contracts, No suprise fees</p>
                    <div className='plan-switcher mt-3'>
                        <button className='btn btn-primary btn-switcher m-2'>Web Applications</button>
                        <button className='btn btn-primary btn-switcher m-2'>Mobile Applications</button>
                    </div> 
                </div>
                
                <main>
                    <div className='pricing-cards-wrapper'>

                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal">Basic</h4>
                            </div>
                            <div class="card-body d-flex flex-column justify-between" style={{height: "350px"}}>
                                <div>
                                <h1 class="card-title pricing-card-title">₹499<small class="text-muted fw-light">/-</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Static Website</li>
                                    <li>Tech Stack - HTML, CSS, JS</li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                </div>
                                <button type="button" className="btn-primary w-100">Join</button>
                            </div>
                        </div>

                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal">Active</h4>
                            </div>
                            <div class="card-body d-flex flex-column justify-between" style={{height: "350px"}}>
                                <div>
                                <h1 class="card-title pricing-card-title">₹999<small class="text-muted fw-light">/-</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Static Website</li>
                                    <li>Tech Stack - HTML, CSS, JS</li>
                                    <li>Database with Firestore by Google</li>
                                    <li>Email support</li>
                                </ul>
                                </div>
                                <button type="button" className="btn-primary w-100">Join</button>
                            </div>
                        </div>
                            
                        <div class="card mb-4 rounded-3 shadow-sm most-used">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal">Advance</h4>
                            </div>
                            <div class="card-body d-flex flex-column justify-between" style={{height: "350px"}}>
                                <div>
                                <h1 class="card-title pricing-card-title">₹1599<small class="text-muted fw-light">/-</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Dynamic Website</li>
                                    <li>Tech Stack - React</li>
                                    <li>Database with Firestore by Google</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                </div>
                                <button type="button" className="btn-primary w-100">Join</button>
                            </div>
                        </div>
                            
                        <div class="card mb-4 rounded-3 shadow-sm">
                            <div class="card-header py-3">
                                <h4 class="my-0 fw-normal">Pro</h4>
                            </div>
                            <div class="card-body d-flex flex-column justify-between" style={{height: "350px"}}>
                                <div>
                                    <h1 class="card-title pricing-card-title">₹1999<small class="text-muted fw-light">/-</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Dynamic Website</li>
                                        <li>Tech Stack - MERN Stack</li>
                                        <li>Database with MongoDB</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn-primary w-100">Join</button>
                            </div>
                        </div>
                        </div>
                </main>
            </div>
        </>
    )
}

export default PricingComponent;