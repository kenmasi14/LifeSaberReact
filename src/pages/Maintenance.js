import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/maintenance.css'
import '../components/style.css'
import MaintenanceNav from '../components/MaintenanceNav';

const Maintenance = () => {
  return (
    <>
    <MaintenanceNav></MaintenanceNav>
    <div class="container containerBG">
      <section>
        <div class="image">
          <img src="./assets/3d pic.PNG" alt="Construction website picture" />
        </div>
        <div class="maintenance">
          <h1>Under Maintenance</h1>
          <i>Our website is under construction, we are working very hard to give you the best experience with this one.</i>
        </div>
      </section>
    </div>
    </>
  )
}

export default Maintenance