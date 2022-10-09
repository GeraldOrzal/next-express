import {useRouter} from 'next/router'
import Public from '../components/shared/public'
export default function Login() {
  const {query} = useRouter();
  
  return (
    <Public>
      <h1>Sign in</h1>
      <form action="/login/password" method="post" className='border flex flex-col items-center w-1/2 rounded mx-auto p-5 space-y-5'>
        {query?.err&&<label className='text-red-500'>{query.err}</label>}
        <section className='space-x-5'>
          <label>Username:</label>
          <input id="username" name="username" type="text" autoComplete='username' className='border'/>
        </section>
        <section className='space-x-5'>
          <label htmlFor="current-password">Password:</label>
          <input id="current-password" name="password" type="password" autoComplete="current-password" required className='border'/>
        </section>
        <button type="submit" className='border w-full rounded'>Sign in</button>
      </form>
    </Public>
  );
}
