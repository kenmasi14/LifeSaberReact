import React from 'react'

function BandageHeader() {
  return (
    <>
    <div className="container bandageHeader">
            <div className="row">
                <div className="col">
                    <h1 className="text-white fw-bold bandageHeaderTitle">WHAT IS BANDAGE?</h1>
                    <p className="bandageDiscText">A bandage is a piece of material used either to support a medical device such as a dressing or splint, or on its own to provide support to or to restrict the movement of a part of the body. When used with a dressing, the dressing is applied directly on a wound, and a bandage used to hold the dressing in place.</p>
                </div>
                <div className="col">
                    <img src="./assets/bandage-8355819-6629695.png" alt="" className="img-fluid"/>
                </div>
            </div>
    </div>
    </>
  )
}

export default BandageHeader