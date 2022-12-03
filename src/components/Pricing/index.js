import './index.css';

const Pricing = () => {

    const src = 'https://images.unsplash.com/photo-1611095785020-1ba3dd228ea7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVhbHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

    return (
        <>
            <div className='main-wrapper'>
                <div className='w-75 m-auto center pricing'>
                    <div className='txt-wrapper'>
                        <h1 className='hero-txt c-dark'>
                            Ready to <i>boost</i> your reach amoung your customers !
                        </h1>
                        <p><i>devlopify</i> is created to grow local buisness and make them reach to the height of internet. Hence we kept our prices as low as we could.</p>
                        <p>Where company and freelancers charges for arround <i>40,000 to 50,000 INR</i>. We give the same quality of designs starting with just <i>3,000 INR</i></p>
                        <button className='btn-primary m-auto mt-5'>Know More</button>
                    </div>
                    <div>
                        <img className='img-pricing' src={src} alt='img' />
                    </div>                  
                </div>
            </div>
        </>
    )
}

export default Pricing;