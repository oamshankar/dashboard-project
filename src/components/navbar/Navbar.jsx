import React from 'react';
import "./navbar.css";
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-title">
        <h3><span>N</span>ecleo</h3>
      </div>
      <div className="user">
        <div className="trial">
          <span>Free Trial</span>
          <p>Extend free trial</p>
        </div>
        <div className="vertical"></div>
        <p>2 days left</p>
        <img src="https://source.unsplash.com/600x700/?man" alt="" />
        <FaCaretDown/>
      </div>
    </div>
  )
}
