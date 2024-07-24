"use client"
import React, { useEffect } from 'react'

function UserError({error}:{error:Error}) {
    useEffect(()=>{
        console.log("user fetching error "+error)
    }),[error]
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="text-lg text-red-500">User Data {error.message}</p>
      </div>
      
    </div>
  )
}

export default UserError
