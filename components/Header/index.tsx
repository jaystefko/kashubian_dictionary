import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { Facebook, Instagram, QuestionMark, Menu as ManuIcon } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import { useIntl } from 'react-intl';
import { MouseEvent, useState } from 'react';
import cookie from 'react-cookies';
import { COLORS } from '../../utils/types';

function Header() {
  const intl = useIntl();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (locale: string) => {
    cookie.save('NEXT_LOCALE', locale, { path: '/' });
  };

  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          height={90}
          width={237}
          alt='Logo'
          role='link'
          title={intl.formatMessage({ id: 'topMenu.startPage' })}
        />
      </Link>
      <div className={styles.desktopContainer}>
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
            <Link href='' locale='pl' onClick={() => changeLanguage('pl')}>
              <a className={styles.icon}>
                <Image
                  src='/images/pl.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'polish' })}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/translate'>
              <a className={styles.icon}>
                <Image
                  src='/images/csb.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'kashebian' })}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/translate'>
              {/* locale='en' onClick={() => changeLanguage('en')} */}
              <a className={styles.icon}>
                <Image
                  src='/images/gb.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'english' })}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/translate'>
              <a className={styles.icon}>
                <Image
                  src='/images/de.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'german' })}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/translate'>
              <a className={styles.icon}>
                <Image
                  src='/images/uk.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'ukrainian' })}
                />
              </a>
            </Link>
          </li>
          <li className={styles.iconContainer}>
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
          <li className={styles.iconContainer}>
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
          <li className={styles.iconContainer}>
            <a
              className={styles.icon}
              href='https://twitter.com/kaszubskieslowa'
              rel='external nofollow noreferrer'
              target='_blank'
              title={intl.formatMessage({ id: 'topMenu.tweeter' })}
            >
              <Image
                src='/images/tweeter.svg'
                width={24}
                height={24}
                alt={intl.formatMessage({ id: 'topMenu.tweeter' })}
              />
            </a>
          </li>
          <li className={styles.iconContainer}>
            <Link href='/howTo'>
              <a className={styles.icon} title={intl.formatMessage({ id: 'topMenu.howTo' })}>
                <QuestionMark />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.mobileContainer}>
        <Button
          id='menu-button'
          variant='text'
          style={{ backgroundColor: COLORS.YELLOW }}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <ManuIcon style={{ color: 'black' }} />
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href='/about'>{intl.formatMessage({ id: 'topMenu.about' })}</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/foundation'>{intl.formatMessage({ id: 'topMenu.foundation' })}</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/lessons'>{intl.formatMessage({ id: 'topMenu.lessons' })}</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/comments'>{intl.formatMessage({ id: 'topMenu.comments' })}</Link>
          </MenuItem>
          <MenuItem>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <a
                href='https://www.facebook.com/Sloworz'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <Facebook />
              </a>
              <a
                href='https://www.instagram.com/polsko_kaszebsczi_sloworz'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <Instagram />
              </a>
              <a
                href='https://twitter.com/kaszubskieslowa'
                rel='external nofollow noreferrer'
                target='_blank'
              >
                <Image
                  src='/images/tweeter.svg'
                  width={24}
                  height={24}
                  alt={intl.formatMessage({ id: 'topMenu.tweeter' })}
                />
              </a>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
