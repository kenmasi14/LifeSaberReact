import React from 'react'
//import "../components/LoginPage.css"
//import "../components/LoginPageFunction"

const LoginPage = () => {
    return (
        <>
            <div class="container">
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
                        <p class="account-text">Don't have an account? <button id="sign-up-btn2">Sign up</button></p>
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
                        <p class="account-text">Already have an account? <button id="sign-in-btn2">Sign in</button></p>
                    </form>
                </div>
                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <button class="btn" id="sign-in-btn">Sign in</button>
                        </div>
                        <img src="./assets/solo logo.png" alt="" class="image" />
                    </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <button class="btn" id="sign-up-btn">Sign up</button>
                        </div>
                        <img src="./assets/solo logo.png" alt="" class="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage