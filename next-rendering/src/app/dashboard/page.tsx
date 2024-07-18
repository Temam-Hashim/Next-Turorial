"use client"
import React,{useState} from 'react'


function Dashboard() {
    console.log("Dashboard Client component");
    const [name, setName] = useState("");
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Hello, {name}</h1>
    </div>
  )
}

export default Dashboard;
