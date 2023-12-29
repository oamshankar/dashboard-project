import React from 'react';
import "./update.css";

export default function Update(props) {
    const [updateItem,setUpdateItem] = React.useState({
    "id": props.id,
      "title": props.title,
      "desc": props.desc,
      "deadline":props.deadline,
      "team" : props.team
  })


  const [error,setError] = React.useState(false)

  function handleChange(event){
    const {name ,value} = event.target;
    setUpdateItem(prevState =>{
      return {...prevState,
        [name] : value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    if(updateItem.title ==="" || updateItem.deadline==="" ){
      setError(true)
    }
    else {
      fetch("https://allproject-data.onrender.com/allProjects/"+updateItem.id,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(updateItem)
     })
    .then(res => {
      props.settingBox()
      props.refresh()
    })
    .catch(err => console.log(err.message))
  }
    }
     

  return (
    < div className="update">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <label>Project Name* :
              <input type='text'  name ="title"  value = {updateItem.title} onChange={handleChange}/>
            </label>
          <label>
            Team Member : 
            <input type='text'  name="team"  value = {updateItem.team} onChange={handleChange}/>
          </label>
          <label>
            Deadline* : 
            <input type='date'  name="deadline"  value = {updateItem.deadline} onChange={handleChange}/>
          </label>
          </div>
          <label>
            Description : 
            <textarea  name="desc" value = {updateItem.desc} onChange={handleChange}></textarea>
          </label>
          {error && <span>Please fill all necessary feilds</span>}
          <button type='submit'>Update</button>
          
        </form>

        <button onClick={() => props.settingBox()} className='back' type='submit'>Back</button>
        
      </div>
  )
}
