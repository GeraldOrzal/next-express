import React from 'react'
import Button from './button'
export default function Nav(props) {
  return (
    <ul className='flex flex-row space-x-5 border border-bottom'>
        <li>{process.env.APP_NAME??"APP NAME"}</li>
        <li><Button as="FORM" method="POST" action="/logout" className="font-bold">LOGOUT</Button></li>
    </ul>
  )
}
