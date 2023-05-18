import React, { useRef } from "react";
import BioInfo from "../information/Bioinfo/bioInfo";
import EmployInfo from "../information/Employment/employInfo";
import ContactInfo from "../information/Contact/contactInfo";
import "./profile.css";
import { FcMenu } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import diary from "../assets/diary.png";
import blob from "../assets/HeroBackground.svg";
import circle from "../assets/circle.png";
import profile from "../assets/profilepic.jpg";
import sign from "../assets/signature.png";
import bio from "../assets/bio.jpeg";
import { IoIosCloudUpload, IoMdPhotos } from "react-icons/io";
import {MdToggleOn} from "react-icons/md"

export default function Profile() {
  const upload = useRef(null);
  return (
    <main className="profileContainer">
      <aside className="menu">
        <div className="menutitle">
          <h1>Menu</h1>
          <span className="menuB">
            <FcMenu size={28} color="inherit" />
          </span>
          <img className="circle" src={circle} alt="" />
          <img className="blob1" src={blob} alt="" />
          <img className="blob2" src={blob} alt="" />
        </div>
        <ul className="menuList">
          <li>
            {" "}
            Edit profile <span><MdToggleOn/></span>
          </li>
          <li>
            {" "}
            Medical <span><MdToggleOn/></span>
          </li>
          <li>
            {" "}
            Next of kin <span><MdToggleOn/></span>
          </li>
          <li>
            {" "}
            dependants <span><MdToggleOn/></span>
          </li>
          <li>
            {" "}
            education history <span><MdToggleOn/></span>
          </li>
          <li>
            {" "}
            employment history <span><MdToggleOn/></span>
          </li>
          <li>
            {" "}
            documents <span><MdToggleOn/></span>
          </li>
        </ul>
      </aside>
      <section className="profile_edit">
        <nav>
          <div className="profile_desc">
            <p>
              {" "}
              Edit profile <span></span>
            </p>
            <p>
              contrary to popular believe, Lorem ipsum is not simply random
              text, it has roots in a piece of classical latin literature from
              45 BC, making it over 2000 years old. Richard McClintok, a latin
              professor at Hampden-Sydney College.{" "}
            </p>
          </div>
          <div className="profile_icon">
            <img src={diary} alt="" />
          </div>
          <img className="circle" src={circle} alt="" />
          <img className="blob1" src={blob} alt="" />
          <img className="blob2" src={blob} alt="" />
        </nav>
        <main>
          <div className="display">
            <div className="display_left">
              <img src={profile} alt="" />

              <button className="first">
                {" "}
                View photo
                <span>
                  {" "}
                  <IoMdPhotos size={25} />
                </span>
              </button>

              <button className="second" onClick={() => upload.current.click()}>
                {" "}
                Upload photo
                <span>
                  <IoIosCloudUpload size={25} />
                </span>
              </button>
              <input type="file" ref={upload} />
            </div>
            <div className="display_right">
              <button className="update">
                {" "}
                Update profile
                <span>
                  <CgProfile size={25} />
                </span>
              </button>
            </div>
          </div>
          <section className="info">
            <BioInfo />
            <EmployInfo />
            <ContactInfo />
          </section>
          <aside className="other">
            <h1>
              {" "}
              Others <span><MdToggleOn/></span>
            </h1>
            <div className="identity">
              <div className="signature">
                <h2>signature</h2>
                <div>
                    <img src={sign} alt="signature" />
                </div>
              </div>
              <div className="fingerprint">
                <h2>fingerprint</h2>
                <div>
                    <img src={bio} alt="biometric" />
                </div>
              </div>
            </div>
          </aside>
        </main>
      </section>
    </main>
  );
}
