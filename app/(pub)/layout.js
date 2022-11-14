import { useRouter } from "next/navigation"
import Button from "../../components/common/button"

export default function RootLayout({ children }) {
  
  
    return (
      <main className="border ">
          <Button
          
          >Back</Button>
          {children}
      </main>
    )
  }
  