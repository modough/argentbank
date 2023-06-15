import { useState } from "react"
import Input from "../components/input"
import { useDispatch } from "react-redux"
import { createAccountData } from "../features/fetchData"
import { Link } from "react-router-dom"




function CreateAccountPage() {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

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
                setSuccess('Account successfully created ! You may return to Sign In page !')
            } else {
                setError('Access denied !, Invalid Credentials');
            }
        })

    }


    return (
        <main className="main bg-dark create">
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
                        required
                    />
                    <Input
                        className="input-wrapper"
                        title="Lastname"
                        value={lastName}
                        id="lastname"
                        action={(e) => setLastName(e.target.value)}
                        required
                    />
                    <Input
                        className="input-wrapper"
                        title="Email"
                        value={email}
                        id="email"
                        action={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        className="input-wrapper"
                        title="Password"
                        value={password}
                        id="password"
                        action={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="sign-in-button" onClick={handleSignup}>
                        Sign up
                    </button>
                    <div className="error-alert" role='alert'>
                        {success ?
                            <p className="success">{success}</p> :
                            <p className="error">{error}</p>
                        }
                    </div>
                    <Link to='/login'>
                        <p className="signup-text">Sign In</p>
                    </Link>

                </form>
            </section>
        </main >
    )
}

export default CreateAccountPage