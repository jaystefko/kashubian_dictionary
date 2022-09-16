import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { Facebook, Instagram, QuestionMark, Message } from '@mui/icons-material';
import { useIntl } from 'react-intl';

function Header() {
  const intl = useIntl();

  return (
    <header className={styles.header}>
      <Link href='/'>
        {/* 453px width; 172px height in original image */}
        <Image
          src='/images/logo.png'
          height={90}
          width={237}
          alt='Logo'
          role='link'
          title={intl.formatMessage({ id: 'topMenu.startPage' })}
        />
      </Link>
      <div>
        <ul className={styles.navList}>
          <li>
            <Link href='/about'>{intl.formatMessage({ id: 'topMenu.about' })}</Link>
          </li>
          <li>
            <Link href='/foundation'>{intl.formatMessage({ id: 'topMenu.foundation' })}</Link>
          </li>
          <li>
            <Link href='/lessons'>{intl.formatMessage({ id: 'topMenu.lessons' })}</Link>
          </li>
          <li>
            <Link href='/comments'>{intl.formatMessage({ id: 'topMenu.comments' })}</Link>
          </li>
        </ul>
        <ul className={styles.iconList}>
          <li>
            <a
              className={styles.icon}
              href='https://www.facebook.com/Sloworz'
              rel='external nofollow noreferrer'
              target='_blank'
              title={intl.formatMessage({ id: 'topMenu.fb' })}
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              className={styles.icon}
              href='https://www.instagram.com/polsko_kaszebsczi_sloworz'
              rel='external nofollow noreferrer'
              target='_blank'
              title={intl.formatMessage({ id: 'topMenu.instagram' })}
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              className={styles.icon}
              href='https://twitter.com/kaszubskieslowa'
              rel='external nofollow noreferrer'
              target='_blank'
              title={intl.formatMessage({ id: 'topMenu.tweeter' })}
            >
              <Message />
            </a>
          </li>
        </ul>
        <Link href='/howTo'>
          <a className={styles.icon} title={intl.formatMessage({ id: 'topMenu.howTo' })}>
            <QuestionMark />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
