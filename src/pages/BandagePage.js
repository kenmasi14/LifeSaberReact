import React from 'react'
import BandageHeader from '../components/BandageHeader'
import '../components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListViewFile from '../components/ListViewFile';
import NavbarOther from '../components/NavbarOther';

function BandagePage() {
  return (
    <>
        <NavbarOther>
            <BandageHeader/>
        </NavbarOther>
        <ListViewFile/>
    </>
  )
}

export default BandagePage