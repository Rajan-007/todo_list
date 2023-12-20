"use client";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [todos, setTodos] = useState(() => localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
  const [task, setTask] = useState('');

  const handleAddTodo = async () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      await localStorage.setItem('todos', JSON.stringify(todos));
      setTask(''); // Clear input
  
      // Force a re-render to ensure the UI reflects the latest state
      setTodos((prevTodos) => prevTodos);
    }
  };
  

  const handleDeleteTodo = async (index) => {
    setTodos(todos.filter((todo, todoIndex) => todoIndex !== index));
    await localStorage.setItem('todos', JSON.stringify(todos));
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <h1 className="bg-black text-center text-3xl font-bold py-5">Todo List</h1>
      <div className="flex justify-center my-10">
        <input
          className="text-blue-500 p-2 text-lg"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-emerald-800 p-4 mx-4 rounded text-xl font-bold"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <div className="flex justify-center items-center">
        <ul>
          {todos.map((todo, index) => (
            <li key={todo} className="font-semibold text-2xl bg-black p-4 px-6 m-5 rounded-sm">
              <label>
                <input className="mr-8 h-8 w-8" type="checkbox" />
                {todo}
                <button
                  className="bg-white text-black text-lg rounded-full ml-10 p-2"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Remove
                </button>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
