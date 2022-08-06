import styles from './styles.module.css'

function Footer() {
  const thisYear = new Date().getFullYear()
  const yearMessage = `2022${thisYear === 2022 ? '' : ` - ${thisYear}`}`

  return (
    <footer className={styles.footer}>
      <p>&#169; {yearMessage} Fundacja Kaszuby</p>
    </footer>
  )
}

export default Footer
