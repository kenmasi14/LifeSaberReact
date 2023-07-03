import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <>
                <header>
        <nav class="container px-3 uppernav">
            <div class="nav-logo">
                <img src="assets/LOGO LIFESABER.png" alt="LIFESABER" srcset=""/>
            </div>
            <ul>
                <li>
                    <div class="input-group">
                        <span class="input-group-text"><FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} /></span>
                        <input type="text" class="form-control"/>
                    </div>
                </li>
                <li>
                    <div class="user-icon"><FontAwesomeIcon icon={faUser} /></div>
                </li>
            </ul>
        </nav>

        <div class="container" d-flex>
            <nav class="navMain sidebar" id="sidebarNav">
                <div class="container" id="mainNavData">
                    <div class="nav-logo hiddenLogo" id="hiddenLogo">
                        <img class="img-fluid" src="assets/LOGO LIFESABER.png" alt=""/>
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
            <div class="img-fluid maindesign img-data">
                <img class="img-fluid" src="assets/pngwing.com (7).png" alt=""/>
            </div>
        </div>

    </header>
        </>
    )
}

export default Navbar;