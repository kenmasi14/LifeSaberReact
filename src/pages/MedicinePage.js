import React from 'react'
import NavbarOther from '../components/NavbarOther'
import MedicineHeader from '../components/MedicineHeader'
import ListViewFile from '../components/ListViewFile'
import '../components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MedicinePage() {
  return (
    <>
        <NavbarOther>
            <MedicineHeader></MedicineHeader>
        </NavbarOther>
        <ListViewFile></ListViewFile>
    </>
  )
}

export default MedicinePage