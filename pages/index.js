import Link from 'next/link'

export async function getServerSideProps(context) {
  return {
    props: {
      isAuth: context.req.isAuthenticated()
    }, // will be passed to the page component as props
  }
}
export default function Home({ isAuth }) {
  return isAuth ? (<>

  </>) : (<><ul>
    <li>
      <Link href="/login" as="/login">
        <a>Login</a>
      </Link>
    </li>
    <li>
      <Link href="/register" as="/register">
        <a>Register</a>
      </Link>
    </li>
  </ul>
  </>)



}
