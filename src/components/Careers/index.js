import "./index.css";
import { useEffect } from "react";

const Careers = () => {

    useEffect(() => {
        document.title = "Careers - devlopify";  
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return(
        <>
        <div className="main-wrapper h-100">
            <div className="career-wrapper">
                <h1>Wanna work with some amazing <i>devlopers</i> out there in the market.</h1>
                <h4>Then for what you are waiting. <i>Come join our team today</i>.</h4>
                <p className="mb-0">All you need to do is just to fill this form powered by <i>Google</i> and just sit. We will reach you once your resume got shortlisted.</p>
                
                <div className="career-img-wrapper">
                    <div>
                        <div id="form">
                            <a href="https://forms.gle/SMzpxhbC9UnGY2m27"><i>Hiring Form</i></a>
                            <p>👈</p>
                        </div>
                        <p className="note mt-0">Note, the hiring process may take some time in order to reach you. In that case we expect a quite patience from your side.</p>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default Careers;