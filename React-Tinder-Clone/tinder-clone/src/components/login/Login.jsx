import React from 'react'
import loginImg from '../../login.svg'
import Button from '@material-ui/core/Button'

export function Login() {
    return (
        <div className="login__baseContainer">
            <div className="login__header">Login</div>
            <div className="login__content">
                <div className="login__image">
                    <img src={loginImg} />
                </div>
                <div className="login__formContainer">
                    <div className="login__formGroup">
                        <label htmlFor="username">UserName</label>
                        <input type="text" name="username" placeholder="user name" />
                    </div>
                    <div className="login__formGroup">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="login__footer">
                <Button
                    type="button"
                    variant="contained"
                    color="primary">
                        Login
                </Button>
            </div>
        </div>
    )
}

export default Login
