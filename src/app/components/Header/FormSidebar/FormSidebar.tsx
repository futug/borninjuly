import React from 'react'
import styles from './FormSidebar.module.css'
import { Form } from './Form/Form'
import { IoMdClose } from "react-icons/io";
interface IFormSidebarProps {
  isFormSidebarOpen: boolean
  setIsFormSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const FormSidebar = ({ isFormSidebarOpen, setIsFormSidebarOpen }: IFormSidebarProps) => {

  return (
    <div className={`${styles.formSidebar} ${isFormSidebarOpen ? styles.formSidebarOpen : ''}`}>
      <IoMdClose size={30} onClick={() => setIsFormSidebarOpen(false)} className={styles.close}/>
      <Form />
    </div>
  )
}

export default FormSidebar