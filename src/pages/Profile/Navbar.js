import React from 'react'
import Back from '../../assets/images/back.png'
import Contract from '../../assets/images/contract.png'
import People from '../../assets/images/people.png'
import Logout from '../../assets/images/logout.png'

const Navbar = () => {
  return (
    <div className="d-flex exam_navbar">
      <img src={Back} alt="" className="exam_nav" />
      <div className="d-flex">
        <img src={People} alt="" className="exam_nav" />
        <p className="auth">Manohar</p>
      </div>
      <div className="d-flex">
        <img src={Contract} alt="" className="exam_nav" />
        <p className="auth">0</p>
      </div>
      <img src={Logout} alt="" className="exam_nav" />
    </div>
  )
}

export default Navbar
