'use client'
import React from 'react'
import Button from '../common/button'
export default function Navigation() {
  return (
    <div className='flex flex-row place-items-center place-content-between p-5'>
        <div>LOGO</div>
        <form action='/logout' method='POST'>
          <Button>LOGOUT</Button>
        </form>
    </div>
  )
}
