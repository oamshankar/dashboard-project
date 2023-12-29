import React from 'react';
import "./cards.css";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
export default function Cards(props) {

  function handleDelete(e){
    e.preventDefault()
    if(window.confirm("Do you want to delete this project?")){
    fetch("https://allproject-data.onrender.com/allProjects/"+props.id,{
      method:"DELETE",
     })
    .then(res => props.delete())
    .catch(err => console.log(err.message))
  }
  }

  let imgUrl="";
  if (props.imageData.length >0){
    let randNum = Math.floor(Math.random()*6);
    imgUrl = props.imageData[randNum].download_url
   
  }

  return (
    <div className='cards'>
      <img onClick={props.clickFunction} src={imgUrl} alt="" />
      <div className="card-details">
        <span onClick={props.clickFunction}>
        {props.title}
      </span>
      <MdOutlineEdit onClick={props.clickFunction}/>
      <MdDeleteOutline onClick={handleDelete}/>
      </div>
      
    </div>
  )
}
