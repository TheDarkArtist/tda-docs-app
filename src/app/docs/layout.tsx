import React from 'react'

interface DocsLayoutProps {
  children: React.ReactNode
}

const DocsLayout = ({children}:DocsLayoutProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default DocsLayout
