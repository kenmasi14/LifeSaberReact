import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import '../components/style.css';
import '../components/breakpoints.css';
import Footer from '../components/Footer';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';




function MainPage() {


    useEffect(() => {
        window.addEventListener('scroll', function () {
            let hiddenLogo = document.getElementById('hiddenLogo');
            let sidebarNav = document.getElementById('sidebarNav');
            let mainNavData = document.getElementById('mainNavData');

            if (this.window.scrollY >= window.innerHeight * 1) {
                hiddenLogo.classList.remove('hiddenLogo');
                sidebarNav.classList.remove('sidebar');
                mainNavData.classList.add('mainNavData');
            } else {
                mainNavData.classList.remove('mainNavData');
                hiddenLogo.classList.add('hiddenLogo');
                sidebarNav.classList.add('sidebar');
            }

        });
    });


    return (
        <>
            <Navbar></Navbar>
            <section class="container position-absolute cardList ListOfCard">
                <div class="row gx-0 whiteCard">

                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <Link to="/bandage">
                            <div class="card text-center">
                                <div class="card-body h-100">
                                    <i class="fa-solid fa-bandage fs-1 py-1"></i>
                                    <h5 class="card-title">Learn Bondage</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-3">
                        <Link to="/medicine">
                            <div class="card text-center">
                                <div class="card-body h-100">
                                    <i class="fa-solid fa-tablets fs-1 py-1"></i>
                                    <h5 class="card-title">Learn Right Medicine</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                        <Link to="/FirstAidKit">
                            <div class="card text-center">
                                <div class="card-body h-100">
                                    <i class="fa-solid fa-kit-medical fs-1 py-1"></i>
                                    <h5 class="card-title">Learn the right tools</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section class="container newData">
                <h1 class="titleName text-center">
                    With LifeSaber You Can Be
                </h1>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <img class="img-fluid" src="./assets/therapist-with-stethoscope-helps-man-crutches.png" alt="" />
                            <ul>
                                <li>
                                    First Aid Saves Lives.
                                </li>
                                <li>
                                    First Aid Relieves Pain.
                                </li>
                                <li>
                                    First Aid Creates Confidence.
                                </li>
                                <li>
                                    First Aid Increases Safety.
                                </li>
                            </ul>
                        </div>
                        <div class="col">
                            <img class="img-fluid" src="./assets/doctor-with-stethoscope.jpg" alt="" />
                            <ul>
                                <li>
                                    It enables you to increase patient comfort.
                                </li>
                                <li>
                                    It gives you tools to prevent the situation from becoming worse.
                                </li>
                                <li>
                                    It creates the confidence to care.
                                </li>
                                <li>
                                    It encourages healthy and safe living.
                                </li>
                            </ul>
                        </div>
                        <div class="col">
                            <img class="img-fluid" src="./assets/therapist-with-stethoscope-helps-man-crutches.png" alt="" />
                            <ul>
                                <li>
                                    First Aid Improves Standard of Living.
                                </li>
                                <li>
                                    Your company will be safer place to work
                                </li>
                                <li>
                                    It can reduce recovery time
                                </li>
                                <li>
                                    It’s a great team-building exercise
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container-fluid">
                <div class="card" style={{ maxWidth: '100vw' }}>
                    <div class="row">
                        <div class="col">
                            <img class="img-fluid" src="./assets/whatis.jpg" alt="" srcset="" />
                        </div>
                        <div class="col">
                            <div class="card-body" style={{ lineHeight: "2rem" }}>
                                <h5 class="card-title" style={{ fontSize: "60px", backgroundColor: "navy", color: "#ffff", paddingLeft: "10px" }}>First Aid</h5>
                                <p class="card-text" style={{ fontWeight: "bold" }}>
                                    First aid is the first and immediate assistance given to any person with either a minor or serious illness or injury, with care provided to preserve life, prevent the condition from worsening, or to promote recovery until medical services arrive. First aid is generally performed by someone with basic medical training
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container py-3">
                <div class="row gx-5 align-center text-center">
                    <div class="col col-md-6 col-lg-6 col-lg-4 col-xl-4 col-xxl-4 py-1">
                        <img src="./assets/babies.jpg" alt="" srcset="" />
                        <h4 class="my-3">First Aid for Babies and Children</h4>
                        <button class="btn btn-primary">Read More</button>
                    </div>
                    <div class="col col-md-6 col-lg-6 col-lg-4 col-xl-4 col-xxl-4 py-1">
                        <img src="./assets/3d-illustration-cartoon-characte.jpg" alt="" srcset="" />
                        <h4 class="my-3">First Aid for Adults</h4>
                        <button class="btn btn-primary">Read More</button>
                    </div>
                    <div class="col col-md-12 col-lg-12 col-lg-4 col-xl-4 col-xxl-4 py-1">
                        <img src="./assets/old-man-5748697-4800740.jpg" alt="" srcset="" />
                        <h4 class="my-3">First Aid for Older Adults</h4>
                        <button class="btn btn-primary">Read More</button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default MainPage;