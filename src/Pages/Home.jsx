import React from 'react';
import "./home.css"
import Cards from '../components/card/Cards';
import New from '../components/new/New';
import Newproject from '../components/newproject/Newproject';
import Update from '../components/updateproject/Update';

export default function Home() {
    const[imageData,setimageData] = React.useState([]);
    const[projectData,setProjectData] = React.useState([]);
    const[projectBox,setProjectBox] = React.useState(false);
    const[isUpdate, setIsUpdate] = React.useState(false);
    const[updateBox, setUpdateBox] = React.useState({});
    const[deleteitem, setDeleteItem] = React.useState(false);
    const[refresh, setRefresh] = React.useState(false);

  React.useEffect(()=>{
    fetch(" https://picsum.photos/v2/list?page=1&limit=6")
    .then(res=> res.json())
    .then(data => setimageData(data))
  },[])

  React.useEffect(()=>{
    fetch("https://allproject-data.onrender.com/allProjects")
    .then(res => res.json())
    .then(allData => setProjectData(allData))
    .catch(err => console.log(err.message))
  },[refresh,deleteitem])

  function handleRefresh(){
    setRefresh(prevState => !prevState)
  }

  function handleProject(){
    setProjectBox(prevState=> !prevState)
  }

  function handleIsUpdate(input){
    setUpdateBox(input)
    setIsUpdate(prevState=> !prevState)
  }

  return (
    <div className="home">
      {imageData.length > 0 && projectData.map(item =>(
        <Cards key ={item.id} id ={item.id} imageData = {imageData} title ={item.title} delete ={() =>setDeleteItem(prevState => !prevState)} clickFunction ={()=> handleIsUpdate(item)} />
      ))}

      <New clickFunction ={()=> handleProject()} />
    
      {projectBox && <Newproject refresh = {() => handleRefresh()} settingBox = {handleProject}/>}
      {isUpdate && <Update  refresh = {() => handleRefresh()} key ={updateBox.id} id = {updateBox.id} title ={updateBox.title} desc={updateBox.desc} deadline={updateBox.deadline} team = {updateBox.team} settingBox = {handleIsUpdate}/>}
      
      
    </div>
  )
}
