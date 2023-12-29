import React from 'react';
import "./newproject.css"

export default function Newproject(props) {
  const [newProject,setNewProject] = React.useState({
    "id": "",
      "title": "",
      "desc": "",
      "deadline":"",
      "team" : ""
  })

 

  const [error,setError] = React.useState(false)

  function handleChange(event){
    const {name ,value} = event.target;
    setNewProject(prevState =>{
      return {...prevState,
        [name] : value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    if(newProject.title ==="" || newProject.deadline==="" ){
      setError(true)
    }
    else {
      fetch("https://allproject-data.onrender.com/allProjects",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(newProject)
     })
    .then(res => {
      props.settingBox()
      props.refresh()
    })
    .catch(err => console.log(err.message))
  }
    }
     

  return (
    <div className="new-project">
        <form onSubmit={handleSubmit}>
           {/* <input type='number' placeholder='Project ID' name ="id" onChange={handleChange} value = {newProject.id}/> */}
          <div className="inputs">
            <label>Project Name* :
              <input type='text'  name ="title"  value = {newProject.title} onChange={handleChange}/>
            </label>
          <label>
            Team Member : 
            <input type='text'  name="team"  value = {newProject.team} onChange={handleChange}/>
          </label>
          <label>
            Deadline* : 
            <input type='date'  name="deadline"  value = {newProject.deadline} onChange={handleChange}/>
          </label>
          </div>
          <label>
            Description : 
            <textarea  name="desc" value = {newProject.desc} onChange={handleChange}></textarea>
          </label>
          {error && <span>Please fill all necessary feilds</span>}
          <button type='submit'>+ Add</button>
          
        </form>
        <button onClick={() => props.settingBox()} className='back' type='submit'>Back</button>
      </div>
  )
}
