import React from 'react'
import '../styles/Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue()

    const signin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result.user)
                dispatch({
                    type: 'SET_USER',
                    user: result.user,
                })
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
