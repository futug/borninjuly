import React from 'react'
import Item from './Item/Item'
import styles from './Features.module.css'
import { LiaRobotSolid } from "react-icons/lia";
import { SiSoundcharts } from "react-icons/si";
import { FaRegWindowRestore } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";


const Features = () => {
  return (
    <div className={styles.features}>
      <Item icon={<SiSoundcharts size={100}/>} title='CRM' description='Lorem ipsum dolor sit amet, con sectetur adip scing elit, sed do eiusmod tempor incidi.'/>
      <Item icon={<FaRegWindowRestore size={100}/>} title="Title" description="Lorem ipsum dolor sit amet, con sectetur adip scing elit, sed do eiusmod tempor incidi."/>
      <Item icon={<LiaRobotSolid size={100}/>} title="Title" description="Lorem ipsum dolor sit amet, con sectetur adip scing elit, sed do eiusmod tempor incidi."/>
      <Item icon={<MdLocalGroceryStore size={100}/>} title="Title" description="Lorem ipsum dolor sit amet, con sectetur adip scing elit, sed do eiusmod tempor incidi."/>
    </div>
  )
}

export default Features