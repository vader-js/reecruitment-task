import React from 'react'
import "./navbar.css"
import {CgProfile} from 'react-icons/cg'
import {IoSettingsOutline} from "react-icons/io5"
import {AiOutlinePoweroff} from 'react-icons/ai'

export default function Navbar() {
  return (
    <main className='navbarContainer'>
        <h1 className='title'>lavidalocal enterprises <span className="titlespan"><button><IoSettingsOutline size={23}/></button> <button><AiOutlinePoweroff size={23}/></button></span></h1>
        <nav>
            <ul className='leftNavigation'>
                <li><a href=''>home</a></li>
                <li><a href=''>payroll </a></li>
                <li><a href=''>leave </a></li>
                <li><a href=''>loan </a></li>
                <li><a href=''>Appraisal </a></li>
                <li><a href=''>subscriptions </a></li>
            </ul>
            <div className='empty'></div>
            <ul className='rightNavigation'>
                <li> <span><CgProfile size={28}/></span> profile</li>
                <li> <span> <IoSettingsOutline size={28}/></span> settings</li>
                <li> <span> <AiOutlinePoweroff size={28}/></span> logout</li>
            </ul>
        </nav>
    </main>
  )
}
