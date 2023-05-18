import React from "react";
import "./employInfo.css";
import { MdToggleOn } from "react-icons/md";

export default function EmployInfo() {
  return (
    <aside className="employInformation">
      <h1>
        Employment Information{" "}
        <span>
          <MdToggleOn />
        </span>
      </h1>
      <form className="formE" action="">
        <label htmlFor="employ_num">
          Employee Number
          <input
            type="text"
            name="employ_num"
            id="employ_num"
            value="93L-002"
            readOnly
          />
        </label>

        <label htmlFor="employ_type">
          Employment Type
          <select name="employ_type" id="employ_type">
            <option value="fTime">FULL TIME</option>
            <option value="pTime">PART TIME</option>
            <option value="cTime">CONTRACT</option>
          </select>
        </label>
        <label htmlFor="date">
          Employment/Resumption date
          <input
            type="text"
            name="date"
            id="date"
            value="2023-01-31"
            readOnly
          />
        </label>
        <label htmlFor="desig">
          Designation
          <input
            type="text"
            name="desig"
            id="desig"
            value="Software developer 1"
            readOnly
          />
        </label>
        <label htmlFor="dept">
          {" "}
          Department
          <input
            type="text"
            name="dept"
            id="dept"
            value="Enterprise Unit"
            readOnly
          />
        </label>
      </form>
    </aside>
  );
}
