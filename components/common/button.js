import React from 'react'

export default function Button(props) {
  return (
    props.as=="FORM"?
    <form method={props.method} action={props.action} onSubmit={props.onSubmit}>
        <button type='submit' className={props.className}>{props.children}</button>
    </form>:<button>{props.children}</button>
  )
}
