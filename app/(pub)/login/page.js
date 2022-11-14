'use client'
import React from 'react'
import Input from '../../../components/common/input'
import Button from '../../../components/common/button'

export default function page() {
  return (
    <form className='flex flex-col p-5' action='/login/password' method='POST'>
      <label>Username:</label>
      <Input name="username"/>
      <label>Password:</label>
      <Input name="password"/>
      <Button onclick={()=>{
        
      }}>Submit</Button>
    </form>
  )
}
