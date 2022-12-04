import './index.css';

const ErrorPage = ({errorCode}) => {

    const codeMap = {
        '404': 'Page you are looking for does not exixts !',
        '503': 'Sorry its us, some internal server error has been occured.',
    }

    return(
        <>
            <div className='main-wrapper center fdc error-page h-100'>
                <i>{errorCode}</i>
                <h3>{codeMap[errorCode]}</h3>
                <a href='/'><i>Go back to the home</i></a>
            </div>
        </>
    );
}

export default ErrorPage;