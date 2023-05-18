import React from 'react'
import './contactInfo.css'
import {MdToggleOn} from "react-icons/md"

export default function ContactInfo() {
  return (
    <aside className='contactInformation'>
    <h1>Contact Information <span><MdToggleOn/></span></h1>
    <form className="formC" action="">
    <label htmlFor="mNum">Mobile NUmber
        <input type="text" name="mNum" id="mNum" value='EBENEZER'/>
        </label>
        <label htmlFor="pNum">Phone Number
        <input type="text" name="pNum" id="pNum" value='TAIWO'/>
        </label>
        <label htmlFor="pEmail">Primary Email
        <input type="text" name="pEmail" id="pEmail" value='BABALOLAEBENEXERTAIWO@GMAIL.COM'/>
        </label>
        <label htmlFor="sEmail">Secondary Email
        <input type="text" name='sEmail' id='sEmail' value='TAIWO'/>
        </label>
    </form>
</aside>
  )
}
