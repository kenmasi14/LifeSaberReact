import React from 'react'
import { Link } from 'react-router-dom';

function MaintenanceNav() {
  return (
    <>
    <div class="container">
      <nav class="navMain">
          <div class="container mainNavData">
              <div class="nav-logo">
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
    </>
  )
}

export default MaintenanceNav