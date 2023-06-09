import { Link } from "react-router-dom"
import Logo from "../assets/img/argentBankLogo.png"
import { logout } from '../features/authSliceReducer'
import { useDispatch, useSelector } from 'react-redux'


function Header() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
    const { firstName, id } = useSelector((state) => state.userReducer);
    console.log(firstName)

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
                <h1 className="username">{firstName}</h1>
                {id && firstName !== null ?
                    <Link to='/' className="main-nav-item">
                        <span onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i>
                            Logout
                        </span>
                    </Link> :
                    <Link to='/login' className="main-nav-item">
                        <span>
                            <i className="fa fa-user-circle"></i>
                            Sign in
                        </span>
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Header