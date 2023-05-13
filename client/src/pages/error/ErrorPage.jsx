import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div id="error-page">
            <h1>{'404'}</h1>
            <p className="error-message">Oups! The requested page could not be found !</p>
            <p className="homepage">
                <Link to='/'>Return to mainpage</Link>
            </p>

        </div>
    )
}

export default ErrorPage