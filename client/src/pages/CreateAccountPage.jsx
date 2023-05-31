import { useState } from "react"
import Input from "../components/input"
import { useDispatch, useSelector } from "react-redux"
import { createAccountData } from "../features/fetchData"
import { useNavigate } from "react-router-dom"

function CreateAccountPage() {
    const { success, error, loading } = useSelector((state) => state.userReducer)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault()
        let createInfos = {
            firstName,
            lastName,
            email,
            password
        }
        await dispatch(createAccountData(createInfos)).then((action) => {
            console.log(action)
            if (action.payload) {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                navigate('/login')
            }
        })
    }


    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Create Account</h1>
                <form >
                    <Input
                        className="input-wrapper"
                        title="Firstname"
                        value={firstName}
                        id="firstname"
                        action={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                        className="input-wrapper"
                        title="Lastname"
                        value={lastName}
                        id="lastname"
                        action={(e) => setLastName(e.target.value)}
                    />
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
                    <button className="sign-in-button" onClick={handleSignup}>
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>
                    <div className="error-alert" role='alert'>{error ? error : success}</div>

                </form>
            </section>
        </main>
    )
}

export default CreateAccountPage