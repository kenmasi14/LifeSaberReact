import React from 'react'
import NavbarOther from '../components/NavbarOther'
import ContactHeader from '../components/ContactHeader'
import '../components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <>
    <NavbarOther>
        <ContactHeader/>
    </NavbarOther>
    <section className="contactSection">
        <div class="row py-5">
                <div className='col'>
                    <div className='contact-container'>
                        <h1 class="abtHeader text-center">
                            Message
                        </h1>
                    </div>
                    <div className='contactForm'>
                        <form>
                            <div class="nameInput">
                                <input type="text" name="" id="" placeholder="First Name"/>
                                <input type="text" name="" id="" placeholder="Last Name"/>
                            </div>
                            <div class="emailInput">
                                <input type="email" placeholder="Input Email"/>
                            </div>
                            <div class="phoneInput">
                                <input type="number" placeholder="Input Phone Number"/>
                            </div>
                            <div class="messageArea">
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write a Message"></textarea>
                            </div>
                            <div class="sendBtn">
                                <div class="btn btn-success">
                                    <button>Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col">
                    <img src="./assets/clipart799059.png" alt="" class="img-fluid"/>
                </div>
                
        </div>
    </section>
    </>
  )
}

export default Contact