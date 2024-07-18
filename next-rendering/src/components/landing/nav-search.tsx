"use client"
import React,{useState} from 'react'

function NavSearch() {
   const [search, setSearch] = useState("");
    console.log("navSearch rendered");
  return (
    <div>
      <h1>Nav Search rendered</h1>
    </div>
  )
}

export default NavSearch;