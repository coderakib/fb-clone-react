import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));

    };

    return (
        <div className="login">
            <div className="login__logo">
                 <img className="logo1" 
                    src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt=""
                />

                <img className="logo2"
                    src="https://i.ibb.co/4ZRj2mS/2560px-Facebook-Logo-2019-svg.png" alt=""
                />
            </div>

            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>

            <div className="login__akib">
                    <p>Clone By <br/> AKIB HUSSAIN</p>
            </div>
            
        </div>
    )
}

export default Login
