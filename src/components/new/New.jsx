import React from 'react';
import "./new.css";
import { HiDocumentAdd } from "react-icons/hi";
export default function New(props) {
  return (
    <div className='new-cards'>
      <div className="new-box" onClick={() => props.clickFunction()}>
        <HiDocumentAdd/>
      </div>
      <div className="new-card-details" onClick={() => props.clickFunction()}>
        <span>
        Create a New Project
      </span>
      </div>
      
    </div>
  )
}
