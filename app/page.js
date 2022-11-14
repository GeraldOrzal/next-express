import Link from 'next/link'


async function getAuthenticated(call){
  
  return []
}
export default async function HomePage(props) {
  const test = await getAuthenticated()
  
  return (
  <main>
    landing page
  </main>)



}
