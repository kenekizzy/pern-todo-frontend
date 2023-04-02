import React, { useState, useEffect} from 'react'
import Edit from "./Edit"
import axios from "axios"

const baseURL = "http://localhost:5000/api";

const List = () => {
  const [ data, setData] = useState()

  useEffect(() => {
    axios.get(`${baseURL}/gettodo`).then((response) => {
      setData(response.data);
    });
  }, [])

  const deleteList = (id) => {
    axios.delete(`${baseURL}/deletetodo/${id}`).then((response) => {
      console.log(response)
    })
  }
  console.log(data)
  return (
    <div>
      <h2>  TO - DO LIST</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? data.map(datum => (
              <tr>
                <td>{datum.todo_id}</td>
                <td>{datum.description}</td>
                <td>
                    <Edit todo={datum}/>
                </td>
                <td>
                  <button onClick={() => deleteList(datum.todo_id)} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            )): 
            <h2>No Data Exists</h2>
            } 
        </tbody>
      </table>
    </div>
  )
}

export default List