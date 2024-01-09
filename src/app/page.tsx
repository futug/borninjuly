import { Sidebar } from './components/Sidebar/Sidebar'
import { Maincontent } from './components/MainContent/Maincontent'

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Maincontent />
    </main>
  )
}
