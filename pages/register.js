import {useRouter} from 'next/router'
export default function Register() {
  const {query} = useRouter();
  return (
    <>
    <h1>Sign up</h1>
    <form action="/register" method="post" className='border flex flex-col items-center w-1/2 rounded mx-auto p-5 space-y-5'>
      {query?.err&&<label className='text-red-500'>{query.err}</label>}
      <section className='space-x-5'>
        <label>Username:</label>
        <input id="username" name="username" type="text" autocomplete="username" className='border'/>
      </section>
      <section className='space-x-5'>
        <label for="current-password">Password:</label>
        <input id="current-password" name="password" type="password" autocomplete="current-password" required className='border'/>
      </section>
      <section className='space-x-5'>
        <label for="current-password">Confirm Password:</label>
        <input id="current-password" name="confirm-password" type="password" autocomplete="current-password" required className='border'/>
      </section>
      <button type="submit" className='border w-full rounded'>Sign up</button>
    </form>
  </>
  )
}
