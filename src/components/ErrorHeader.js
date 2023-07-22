import { Link } from 'react-router-dom';


const ErrorHeader = () => {
    return (
        <>
            <header>
                <div class="container">
                    <nav class="navMain">
                        <div class="container mainNavData">
                            <div class="nav-logo">
                                <Link to="/"><img class="img-fluid" src="./assets/LOGO LIFESABER.png" alt="" /></Link>
                            </div>
                            <ul className='ulNavHead'>
                                <li>
                                    <Link to="/Maintenance">First Aid Training Resoruces</Link>
                                </li>
                                <li>
                                    <Link to="/Maintenance">First Aid Quiz</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="container bandageHeader">
                    <div class="row">
                        <div class="col">
                            <h1 class="text-white fw-bold bandageHeaderTitle">404 PAGE NOT FOUND</h1>
                            <p class="bandageDiscText">RETURN TO HOME PAGE</p>
                        </div>
                        <div class="col">
                            <img src="./assets/404-3025721-2526919.webp" alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ErrorHeader