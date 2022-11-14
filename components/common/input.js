import React from 'react'

export default function Input({name}) {
  return (
    <input className='bg-black-200 border m-5 rounded pl-2 focus:outline' name={name}/>
  )
}
