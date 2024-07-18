import React from 'react'
import { serverSideFunction } from '@/utils/server-utils';

function ServerRoute() {
    console.log("Server Side Rendering");
    const result  = serverSideFunction();
  return (

    <div>
      <h1>Server Route Page</h1>
      <p>{result}</p>
    </div>
  )
}

export default ServerRoute;
