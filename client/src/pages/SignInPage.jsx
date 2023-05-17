import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userData } from "../features/fetchData"




function SignInPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, loading } = useSelector((state) => state.userReducer)
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
            }
        })
    }
    return (

        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form >
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email || ''} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password || ''} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" onClick={handleSignin}>
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                    {error && (<div className="error-alert" role='alert'>{error}</div>)}
                </form>
            </section>
        </main>

    )
}

export default SignInPage