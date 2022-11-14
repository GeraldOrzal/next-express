import React from 'react'

export default function button({children,onclick}) {
  return (
    <button
        onClick={onclick}
        className='bg-primary border p-2 rounded hover:bg-indigo-500'
    >{children}</button>
  )
}
