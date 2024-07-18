import React from 'react'
import { cookies } from 'next/headers';
function About() {
     const storedCookies = cookies();
     console.log(storedCookies.get('theme'));

  return (
    <div className="">
      <h1>About page </h1>
      <p>Current Time: {new Date().toLocaleString()}</p>
    </div>
  );
}

export default About
