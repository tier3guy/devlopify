import './index.css';

const Navbar = () => {
    return (
        <>
            <div className='main-wrapper nav-container bg-blur'>
                <nav className='w-75 m-auto navbar'>
                    <h1 className='logo'>devlopify</h1>
                    <ul className='p-0'>
                        <a className='nav-items'>Home</a>
                        <a className='nav-items c-grey'>Features</a>
                        <a className='nav-items c-grey'>Testimonials</a>
                        <a className='nav-items c-grey'>Pricing</a>
                    </ul>
                    <button className='btn-primary'>Contact</button>
                    <button className='bg-none' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="fa-solid fa-bars"></i></button>
                </nav>
            </div>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className='nav-responsive'>
                    <ul className='p-0'>
                        <a className='nav-items'>Home</a>
                        <a className='nav-items c-grey'>Features</a>
                        <a className='nav-items c-grey'>Testimonials</a>
                        <a className='nav-items c-grey'>Pricing</a>
                    </ul>
                    <button className='btn-primary'>Contact</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;