import React, {useState} from 'react'
import axios from 'axios'

const baseURL = "http://localhost:5000/api";


const Input = () => {
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${baseURL}/addtodo`, {
      description: description
    }).then((response) => console.log(response))
    console.log(description)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" value={description} className="form-control" id="description" aria-describedby="emailHelp" placeholder="Enter Description"  onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default Input