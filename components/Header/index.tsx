import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { Facebook, Instagram, QuestionMark, Menu as ManuIcon } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import { useIntl } from 'react-intl';
import { MouseEvent, useState } from 'react';
import cookie from 'react-cookies';
import { COLORS, LOCALES } from '../../utils/types';

function Header() {
  const intl = useIntl();
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null);
  const [anchorLanguageEl, setAnchorLanguageEl] = useState<null | HTMLElement>(null);
  const [lngImgPath, setLngImgPath] = useState('/images/pl.svg');
  const [lngImgLabel, setLngImgLabel] = useState(intl.formatMessage({ id: 'polish' }));
  const openMenu = Boolean(anchorMenuEl);
  const openLanguage = Boolean(anchorLanguageEl);
  const handleClick = (isMenu = true, event: MouseEvent<HTMLButtonElement>) => {
    if (isMenu) {
      setAnchorMenuEl(event.currentTarget);
    } else {
      setAnchorLanguageEl(event.currentTarget);
    }
  };
  const handleClose = (isMenu = true) => {
    if (isMenu) {
      setAnchorMenuEl(null);
    } else {
      setAnchorLanguageEl(null);
    }
  };

  function getLabelFromLocale(locale: LOCALES) {
    switch (locale) {
      case LOCALES.csb:
        return 'kashebian';
      case LOCALES.de:
        return 'german';
      case LOCALES.en:
        return 'english';
      case LOCALES.pl:
        return 'polish';
      case LOCALES.uk:
        return 'ukrainian';
    }
  }

  const changeLanguage = (locale: LOCALES) => {
    setLngImgPath(`/images/${locale}.svg`);
    setLngImgLabel(intl.formatMessage({ id: getLabelFromLocale(locale) }));
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
            <Link href='' locale={LOCALES.pl} onClick={() => changeLanguage(LOCALES.pl)}>
              <a className={styles.icon}>
                <Image
                  src={lngImgPath}
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
              {/* locale={LOCALES.en} onClick={() => changeLanguage(LOCALES.en)} */}
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
          id='language-button'
          variant='text'
          style={{ backgroundColor: COLORS.YELLOW }}
          aria-controls={openMenu ? 'language-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={openMenu ? 'true' : undefined}
          onClick={(e) => handleClick(true, e)}
        >
          <Image src='/images/pl.svg' width={40} height={40} alt={lngImgLabel} />
        </Button>
        <Menu
          id='language-menu'
          anchorEl={anchorMenuEl}
          open={openMenu}
          onClose={() => handleClose(true)}
          MenuListProps={{
            'aria-labelledby': 'language-button',
          }}
        >
          <MenuItem onClick={() => handleClose(true)}>
            <Link href='' locale={LOCALES.pl} onClick={() => changeLanguage(LOCALES.pl)}>
              <a>
                <Image
                  src='/images/pl.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'polish' })}
                />
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={() => handleClose(true)}>
            <Link href='/translate'>
              <a>
                <Image
                  src='/images/csb.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'kashebian' })}
                />
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={() => handleClose(true)}>
            <Link href='/translate'>
              {/* locale='en' onClick={() => changeLanguage('en')} */}
              <a>
                <Image
                  src='/images/gb.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'english' })}
                />
              </a>
            </Link>
          </MenuItem>
          <MenuItem onClick={() => handleClose(true)}>
            <Link href='/translate'>
              <a>
                <Image
                  src='/images/de.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'german' })}
                />
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href='/translate'>
              <a>
                <Image
                  src='/images/uk.svg'
                  width={40}
                  height={40}
                  alt={intl.formatMessage({ id: 'ukrainian' })}
                />
              </a>
            </Link>
          </MenuItem>
        </Menu>

        <Button
          id='menu-button'
          variant='text'
          style={{ backgroundColor: COLORS.YELLOW }}
          aria-controls={openLanguage ? 'app-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={openLanguage ? 'true' : undefined}
          onClick={(e) => handleClick(false, e)}
        >
          <ManuIcon style={{ color: 'black' }} />
        </Button>
        <Menu
          id='app-menu'
          anchorEl={anchorLanguageEl}
          open={openLanguage}
          onClose={() => handleClose(false)}
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}
        >
          <MenuItem onClick={() => handleClose(false)}>
            <Link href='/about'>{intl.formatMessage({ id: 'topMenu.about' })}</Link>
          </MenuItem>
          <MenuItem onClick={() => handleClose(false)}>
            <Link href='/foundation'>{intl.formatMessage({ id: 'topMenu.foundation' })}</Link>
          </MenuItem>
          <MenuItem onClick={() => handleClose(false)}>
            <Link href='/lessons'>{intl.formatMessage({ id: 'topMenu.lessons' })}</Link>
          </MenuItem>
          <MenuItem onClick={() => handleClose(false)}>
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
