"use client"
import React,{ useState } from "react"


export default function Home() {

  const[todos,setTodos]=useState([]);
  const[task,setTask]=useState(' ');

  const addTodo = () => {
    if (task.trim()){
      setTodos([...todos , task])
      setTask(' ')
    }
    
  }
  return (
    <div className='bg-gray-900 h-screen '>
      <h1 className='bg-black text-center text-3xl  font-bold py-5 '>Todo list</h1>
      <div className='flex justify-center my-10'>
        <input className='text-blue-500 p-2 text-lg' type="text" onChange={(e) => setTask(e.target.value)} ></input>
        <button className=' bg-emerald-800 p-4 mx-4 rounded text-xl font-bold' onClick={addTodo}> Add </button>
      </div>
      <div className="flex justify-center ">
        <ul>
          {todos.map((todo) => (
            <li key={todo} className="font-semibold text-2xl bg-black p-2 px-6 m-5 rounded-xl">
              <label>
                <input className="mr-8 "
                  type="checkbox"
                />
                {todo}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
