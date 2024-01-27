import {useState} from 'react'

const register = () => {
 
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  
    const handleFormSubmit=(e)=>{
      e.preventDefault();
  
      fetch("http://localhost:4000/register",{
        method:"POST",
        body:JSON.stringify({name,email,password}),
        headers:{'Content-type':"application/json"}
      })
    }
    return (
      <>
        <div className='border-2 rounded-3xl h-[30rem] shadow-md absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30rem] py-[5rem]'>
          <h1 className='text-center mb-5 capitalize text-[30px] '>Register</h1>
          <form onSubmit={(e)=>handleFormSubmit(e)} className='flex-col flex items-center space-y-5'>
            <input type="text"  placeholder='Name' className='border-2 h-12 w-[15rem] px-4' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Email"  className='border-2 h-12 px-4 w-[15rem]' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password"  className='border-2 h-12 px-4  w-[15rem]' placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='border-2  rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-[10rem] px-4 py-2'>Submit</button>
          </form>
          </div>
      </>
  )
}

export default register