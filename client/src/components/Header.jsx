import { Link } from "react-router-dom"
import Logo from "../assets/img/argentBankLogo.png"

function Header() {
    return (
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo" >
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div className="main-nav-right">
                <h1 className="username">UserName</h1>
                <Link to='/signin' className="main-nav-item" >
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header