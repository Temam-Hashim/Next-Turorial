"use client"
import React,{useState} from "react";

export const  ClientComponent1= ({children}:{children:React.ReactNode}) => {
  const [name, setName] = useState("Temam");
  return (
    <>
      <h1>Client Component 1</h1>
      {children}
    </>
  );
}

