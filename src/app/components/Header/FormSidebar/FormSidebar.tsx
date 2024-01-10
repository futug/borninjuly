import React from 'react'
import styles from './FormSidebar.module.css'
import { Form } from './Form/Form'
import { IoMdClose } from "react-icons/io";
import Link from 'next/link'
interface IFormSidebarProps {
  linkArr: { name: string; path: string }[]
  isFormSidebarOpen: boolean
  setIsFormSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const FormSidebar = ({ isFormSidebarOpen, setIsFormSidebarOpen, linkArr }: IFormSidebarProps) => {

  return (
    <div className={`${styles.formSidebar} ${isFormSidebarOpen ? styles.formSidebarOpen : ''}`}>
      <IoMdClose size={30} onClick={() => setIsFormSidebarOpen(false)} className={styles.close}/>
      <ul className={styles.linkList}>
        {linkArr.map((link) => (
          <li key={link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Form />
    </div>
  )
}

export default FormSidebar
