import React from 'react'
import Nav from '../common/nav'

export default function Auth({children}) {
  return (
    <div>
        <Nav/>
        {children}
    </div>
  )
}
