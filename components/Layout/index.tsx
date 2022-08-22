import Header from '../Header'
import Footer from '../Footer'
import React from 'react'
import styles from './styles.module.css'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
