import React from 'react'
import { Link } from 'react-router-dom';

const NavbarOther = ({ children }) => {
  return (
    <>
        <header className="container-fluid">
        <div className="container">
            <nav className="navMain">
                <div className="container mainNavData">
                    <div className="nav-logo">
                    <Link to="/"><img class="img-fluid" src="./assets/LOGO LIFESABER.png" alt=""/></Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/Maintenance">First Aid Training Resoruces</Link>
                        </li>
                        <li>
                                <Link to="/Maintenance">First Aid Quiz</Link>
                        </li>
                        <li>
                                <Link to ="/about">About</Link>
                        </li>
                        <li>
                            <Link to ="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        {children}
    </header>
    </>
  )
}




  
  export default NavbarOther;