import React from 'react';
import "./sidebar.css";
import { GrDocumentStore } from "react-icons/gr";
import { RiAppsLine } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdPlayCircle } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="side-up">
        <hr/>
        <span style ={{color: "#f79f70"}}> <GrDocumentStore/> <h7>My Projects</h7></span>
        <span> <RiAppsLine/> <h7>Sample Projects</h7></span>
        <hr/>
        <span> <AiOutlineAppstore/> <h7>Apps</h7></span>
        <span> <IoMdPlayCircle/><h7>Intro to Necleo</h7></span>
      </div>

      <div className="side-down">
        <span> <IoIosHelpCircle/> <h7>Help & Support</h7></span>
        <span> <MdFeedback/><h7>Feedback</h7></span>
        <span style ={{color: "black"}}> <TbLayoutSidebarLeftCollapseFilled/><h7>Collapse</h7></span>
      </div>
    </div>
  )
}
