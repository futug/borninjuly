import Image from 'next/image'
import { Header } from './components/Header/Header'
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
