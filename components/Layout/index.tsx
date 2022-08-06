import Header from '../Header'
import Footer from '../Footer'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
