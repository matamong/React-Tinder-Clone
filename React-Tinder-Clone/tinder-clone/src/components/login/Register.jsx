import React from 'react'
import loginImg from '../../login.svg'

export function Register() {
    return (
        <div className="login__baseContainer">
            <div className="login__header">Register</div>
            <div className="login__content">
                <div className="login__image">
                    <img src={loginImg} />
                </div>
                <div className="login__formContainer">
                     <div className="login__formGroup">
                         <label htmlFor="username">Username</label>
                         <input type="text" name="username" placeholder="username"/>
                     </div>
                     <div className="login__formGroup">
                         <label htmlFor="email">Email</label>
                         <input type="email" name="email" placeholder="email"/>
                     </div>
                     <div className="login__formGroup">
                         <label htmlFor="password">Password</label>
                         <input type="password" name="password" placeholder="password"/>
                     </div>
                </div>
            </div>
            <div className="login__footer">
                <button type="button"className="login__button">Login</button>
            </div>
        </div>
    )
}

export default Register
