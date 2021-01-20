import { FiberPinRounded } from '@material-ui/icons'
import React from 'react'
import '../styles/Login.css'
import { auth, provider } from '../firebase'

function Login() {
    const signin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    // className="login__fb"
                    src="https://iconape.com/wp-content/png_logo_vector/facebook-f-logo-2019.png"
                    alt=""
                />

                <img
                    // className="login__name"
                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                    alt=""
                />
            </div>

            <button type="submit" onClick={signin}>
                Sign In
            </button>
        </div>
    )
}

export default Login
