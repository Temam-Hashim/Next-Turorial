import { ClientComponent1 } from '@/components/interleaving/client-component1'
import { ServerComponent1 } from '@/components/interleaving/server-component1'
import React from 'react'

function Interleaving() {
  return (
    <div>
      <h1>Inter leaving</h1>
      <hr/>
      <ClientComponent1><ServerComponent1 /></ClientComponent1>
    </div>
  )
}

export default Interleaving
