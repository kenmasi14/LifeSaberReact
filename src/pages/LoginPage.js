import React, { useState } from 'react'
import "../components/LoginPage.css"

const LoginPage = () => {

    const [isSignUpMode, setSignUpMode] = useState(false)
    const [isSignUpMode2, setSignUpMode2] = useState(false)

    const handleSignUpClick = () => {
        setSignUpMode(true)
    }

    const handleSignInClick = () => {
        setSignUpMode(false)
    }

    const handleSignUpClick2 = () => {
        setSignUpMode2(true)
    }

    const handleSignInClick2 = () => {
        setSignUpMode2(false)
    }


    return (
        <>
            <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''} ${isSignUpMode2 ? 'sign-up-mode' : ''}`}>
                <div class="signin-signup">
                    <form action="" class="sign-in-form">
                        <h2 class="title">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" class="btn" />
                        <p class="account-text">Don't have an account? <button id="sign-up-btn2" onClick={handleSignUpClick2}>Sign up</button></p>
                    </form>
                    <form action="" class="sign-up-form">
                        <h2 class="title">Sign up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Sign up" class="btn" />
                        <p class="account-text">Already have an account? <button id="sign-in-btn2" onClick={handleSignInClick2}>Sign in</button></p>
                    </form>
                </div>
                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <button class="btn" id="sign-in-btn" onClick={handleSignInClick}>Sign in</button>
                        </div>
                        <img src="./assets/solo logo.png" alt="" class="image" />
                    </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <button class="btn" id="sign-up-btn" onClick={handleSignUpClick}>Sign up</button>
                        </div>
                        <img src="./assets/solo logo.png" alt="" class="image" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage