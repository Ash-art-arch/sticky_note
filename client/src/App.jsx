import { Note } from "./components"
import { useState } from "react"

function App() {
  
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([])
  const maxTasksPerNote = 6

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, taskInput])
    setTaskInput('')
  }

  const handleTaskInput = (event) => {
    setTaskInput(event.target.value);
  };
  

  return (
    <>
      <div className="w-full h-screen bg-cover bg-no-repeat flex flex-wrap justify-center" style={{backgroundImage : `url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
        <div className="flex flex-wrap justify-center items-center mt-5 absolute translate-y-1/3 translate-x-1">
          <form onSubmit={handleTaskSubmit}>
            <input type="text" className="p-4 rounded-l-xl shadow-lg text-lg focus:outline-offset-0 focus:outline-gray-200"
            value={taskInput} onChange={handleTaskInput}/>
            <button className="bg-blue-400 p-4 rounded-r-xl text-white hover:border-2 hover:border-sky-100 text-lg hover:opacity-80 active:opacity-50">Add</button>
          </form>
        </div>
        <Note tasks={tasks} />
      </div>
    </>
  )
}

export default App
