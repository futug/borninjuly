import React from 'react'

interface IContainer {
  padding?: string
  margin?: string
  children?: React.ReactNode
}

const Container = ({padding, margin, children}: IContainer = {}) => {
  return (
    <div style={{padding: padding, margin: margin}}>{children}</div>
  )
}

export default Container