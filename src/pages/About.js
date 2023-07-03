import React from 'react'
import NavbarOther from '../components/NavbarOther'
import '../components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutHeader from '../components/AboutHeader';



const About = () => {
  return (
    <>
    <NavbarOther>
        <AboutHeader/>
    </NavbarOther>
    <section class="container py-5">
        <div class="row">
            <div class="col-12 pb-3">
                <h1 class="text-center">ABOUT US</h1>
                <p>Welcome to the world of Lifesaber Team, your ultimate guide to mastering the essential skills of first aid and becoming a confident responder in emergencies. Whether you're a beginner seeking to learn the basics or an experienced individual looking to enhance your knowledge, Lifesaber Team is here to equip you with the necessary tools to save lives.</p>
    
            </div>
            <div class="col text-center">
                <h1 class="text-center">OUR TEAM</h1>
                <div class="row gx-1">
                    <div class="col mb-3">
                        <div class="container">
                            <div class="card" style={{maxWidth: "400px"}}>
                              <img src="assets/356800497_766919915214712_2532550802042611319_n.jpg" class="" alt="Profile Image" style={{maxWidth: '450px', backgroundColor: 'blueviolet', objectFit: 'cover'}}/>
                              <div class="card-body">
                                <h5 class="card-title">JAN KENZI M. MASANGKAY</h5>
                                <p class="card-text">Web Developer</p>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Location: Mamburao, Occidental Mindoro</li>
                                  <li class="list-group-item">Experience: Trainee</li>
                                  <li class="list-group-item">Skills: HTML, CSS, JavaScript</li>
                                </ul>
                                <a href="#" class="btn btn-primary">Contact</a>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="container">
                            <div class="card" style={{maxWidth: "400px"}}>
                              <img src="assets/received_4228207313905224.jpg" class="" alt="Profile Image" style={{maxWidth: '450px', backgroundColor: 'blueviolet', objectFit: 'cover'}}/>
                              <div class="card-body">
                                <h5 class="card-title">JESTONIE A. LACADEN</h5>
                                <p class="card-text">Web Developer</p>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Location: Mamburao, Occidental Mindoro</li>
                                  <li class="list-group-item">Experience: Trainee</li>
                                  <li class="list-group-item">Skills: HTML, CSS, JavaScript</li>
                                </ul>
                                <a href="#" class="btn btn-primary">Contact</a>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="container">
                            <div class="card" style={{maxWidth: "400px"}}>
                              <img src="assets/357628110_207714595109853_2921450444612138088_n.jpg" class="" alt="Profile Image" style={{maxWidth: '450px', backgroundColor: 'blueviolet', objectFit: 'cover'}}/>
                              <div class="card-body">
                                <h5 class="card-title">NERLIE R. DIMAPILIS</h5>
                                <p class="card-text">Web Developer</p>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Location: Cavite, Philippines</li>
                                  <li class="list-group-item">Experience: Trainee</li>
                                  <li class="list-group-item">Skills: HTML, CSS, JavaScript</li>
                                </ul>
                                <a href="#" class="btn btn-primary">Contact</a>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="col py-3 text-center">
                        <h3>
                            Are you ready to embark on this journey with Lifesaber Team? Let's dive in and start mastering the art of first aid!
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About