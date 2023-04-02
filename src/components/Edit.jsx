import React from 'react'

const Edit = (todos) => {

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todos.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Yeah")
  }

  return (
    <div>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todos.todo_id}`}>
        Edit
      </button>

        <div class="modal" id={`id${todos.todo_id}`} onClick={() => setDescription(todos.description)}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)} >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todos.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <h2>Edit Button</h2>
    //   <div className="form-group">
    //     <label htmlFor="description">Description</label>
    //     <input type="text" className="form-control" id="description" aria-describedby="emailHelp" placeholder="Enter Description" />
    //   </div>
    //   <button type="submit" class="btn btn-primary">Edit</button>
    // </form>
  )
}

export default Edit