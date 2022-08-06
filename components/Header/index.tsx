import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        {/* 453px width; 172px height in original image */}
        <Image src='/images/logo.png' height={90} width={237} alt='Logo' role='link' />
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/foundation'>Foundation</Link>
        </li>
        <li>
          <Link href='/lessons'>Lessons</Link>
        </li>
        <li>
          <Link href='/comments'>Comments</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href='https://www.facebook.com/Sloworz' rel='external nofollow'>
            Facebook icon
          </a>
        </li>
        <li>
          <a href='https://twitter.com/kaszubskieslowa' rel='external nofollow'>
            Tweeter icon
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/Sloworz' rel='external nofollow'>
            Instagram icon
          </a>
        </li>
      </ul>
      <Link href='/howTo'>Question sign icon</Link>
    </header>
  )
}

export default Header
