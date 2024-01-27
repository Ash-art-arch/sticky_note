  import Note from "./Note"
  import { useState } from "react"

  function MyNotes() {
    
    const [taskInput, setTaskInput] = useState('')
    const [tasks, setTasks] = useState([])
    const maxTasksPerNote = 6
    
    
    const handleTaskInput = (event) => {
      setTaskInput(event.target.value);
    };
    
    const handleTaskSubmit = (event) => {
      event.preventDefault();
      if(tasks.length >= maxTasksPerNote){
        setTasks([]);
        <Note tasks={tasks}/>
      }
      setTasks([...tasks, taskInput])
      setTaskInput('')
      
    }

    return (
      <>
        <div className="w-full h-screen bg-cover bg-no-repeat flex flex-wrap justify-center font-poppins" style={{backgroundImage : `url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
          <div className="flex flex-wrap justify-center items-center absolute mt-3 translate-y-1/3 translate-x-1">
            <form id="sticky-note" onSubmit={handleTaskSubmit}>
              <input type="text" className="p-2 rounded-l-xl shadow-lg text-base focus:outline-offset-0 focus:outline-gray-200 w-4/5"
              value={taskInput} onChange={handleTaskInput}/>
              <button className="bg-blue-400 p-2 rounded-r-xl text-white hover:border-2 hover:border-sky-100 text-base hover:opacity-80 active:opacity-50 w-1/5">Add</button>
            </form>
          </div>
          <Note tasks={tasks} />
        </div>
      </>
    )
  }

  export default MyNotes
