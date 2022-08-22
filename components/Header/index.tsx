import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { Facebook, Instagram, QuestionMark, Message } from '@mui/icons-material';

function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        {/* 453px width; 172px height in original image */}
        <Image src='/images/logo.png' height={90} width={237} alt='Logo' role='link' />
      </Link>
      <div>
        <ul className={styles.navList}>
          <li>
            <Link href='/about'>O słowniku</Link>
          </li>
          <li>
            <Link href='/foundation'>Fundacja Kaszuby</Link>
          </li>
          <li>
            <Link href='/lessons'>Lekcje</Link>
          </li>
          <li>
            <Link href='/comments'>Zgłoś uwagi</Link>
          </li>
        </ul>
        <ul className={styles.iconList}>
          <li>
            <a
              className={styles.icon}
              href='https://www.facebook.com/Sloworz'
              rel='external nofollow'
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              className={styles.icon}
              href='https://www.instagram.com/polsko_kaszebsczi_sloworz'
              rel='external nofollow'
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              className={styles.icon}
              href='https://twitter.com/kaszubskieslowa'
              rel='external nofollow'
            >
              <Message />
            </a>
          </li>
        </ul>
        <Link href='/howTo'>
          <a className={styles.icon}>
            <QuestionMark />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
