import './index.css';

const Navbar = () => {
    return (
        <>
            <div className='main-wrapper nav-container bg-blur'>
                <nav className='w-75 m-auto navbar'>
                    <h1 className='logo'>devlopify</h1>
                    <ul>
                        <a className='nav-items'>Home</a>
                        <a className='nav-items c-grey'>Features</a>
                        <a className='nav-items c-grey'>Testimonials</a>
                        <a className='nav-items c-grey'>Pricing</a>
                    </ul>
                    <button className='btn-primary'>Contact</button>
                </nav>
            </div>
        </>
    );
}

export default Navbar;