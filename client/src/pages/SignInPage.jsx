import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userData } from "../features/fetchData"
import Input from "../components/input"

function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignin = async (e) => {
        e.preventDefault()
        let userInfos = {
            email,
            password
        }
        await dispatch(userData(userInfos)).then((action) => {
            console.log(action)
            if (action.payload) {
                setEmail('');
                setPassword('');
                navigate('/profile')
            } else {
                setError('Access denied !, Invalid Credentials');
            }
        })
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form >
                    <Input
                        className="input-wrapper"
                        title="Email"
                        value={email}
                        id="email"
                        action={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        className="input-wrapper"
                        title="Password"
                        value={password}
                        id="password"
                        action={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        className="input-remember"
                        title="Remember me"
                        id="checkbox"
                    />
                    <button className="sign-in-button" onClick={handleSignin}>
                        Sign In
                    </button>
                    <div className="error-alert" role='alert'>
                        {error ? <p className="error">{error}</p> : ''}
                    </div>
                    <Link to='/signup'>
                        <p className="signup-text">Create Account</p>
                    </Link>
                </form>
            </section>
        </main>
    )
}

export default SignInPage