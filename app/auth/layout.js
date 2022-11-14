import Navigation from '../../components/shared/navigation'

export default function RootLayout({ children }) {
  
  
    return (
      <main className="border ">
          <Navigation/>
          {children}
      </main>
    )
  }
  