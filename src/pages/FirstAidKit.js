import React from 'react'
import NavbarOther from '../components/NavbarOther'
import FirstAidKitHeader from '../components/FirstAidKitHeader'
import ListViewFile from '../components/ListViewFile'
import '../components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FirstAidKit() {
  return (
    <>
        <NavbarOther>
            <FirstAidKitHeader/>
        </NavbarOther>
        <ListViewFile/>
    </>
  )
}

export default FirstAidKit