import React from 'react'
import "./bioInfo.css"
import {MdToggleOn} from 'react-icons/md'

export default function BioInfo() {
  return (
    <aside className='bioInformation'>
    <h1>Bio Information <span><MdToggleOn/></span></h1>
    <form className="form" action="">
        <label htmlFor="title">Title
        <select name="title" id="title">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
        </select>
        </label>
       
        <label htmlFor="firstName">First Name
        <input type="text" name="firstName" id="firstName" value='EBENEZER'/>
        </label>
        <label htmlFor="lastName">Last Name
        <input type="text" name="lastName" id="lastName" value='TAIWO'/>
        </label>
        <label htmlFor="otherName">Other Names
        <input type="text" name='otherName' id='otherName' value='BABALOLA'/>
        </label>
        <label htmlFor="lga"> LGA
        <input type="text" name='lga' id='lga' value='ILESHA-WEST'/>
        </label>
        <label htmlFor="state">state of origin
        <input type="text" name='state' id='state' value='OSUN STATE'/>
        </label>
        <label htmlFor="country"> country
        <input type="text" name='country' id='country' value='Nigeria'/>
        </label>
        
    </form>
</aside>
  )
}
