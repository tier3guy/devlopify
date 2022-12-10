import './index.css';

const Features = () => {

    return (
        <>
            <div className='main-wrapper bg-dark' id="features">
                <div className='w-75 m-auto center fdc features-wrapper txt-center'>
                    <p>Our best features for you</p>
                    <h1 className='c-white'>What makes us so special and different ?</h1>
                    <div className='w-50 m-auto txt-center'>
                        <p>Our clients feel that our features and un-matchable in the entire <i>SaaS</i> market cap.</p>
                    </div>
                </div>
                <div className='w-75 m-auto center fdc features-wrapper'>
                    <div className='center justify-between w-100 features-container'>
                        <div className='icon-container center fdc'>
                            <i class="fa-solid fa-hand-holding-dollar features-icons"></i>
                            <p className='c-fade'>10x lesser Price</p>
                        </div>
                        <div className='icon-container center fdc'>
                            <i class="fa-solid fa-compass-drafting features-icons"></i>
                            <p className='c-fade'>Amazing designs</p>
                        </div>
                        <div className='icon-container center fdc'>
                            <i class="fa-brands fa-react features-icons"></i>
                            <p className='c-fade'>Mordern Frameworks</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;