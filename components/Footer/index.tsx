import Image from 'next/image';
import { useIntl } from 'react-intl';
import styles from './styles.module.css';

function Footer() {
  const intl = useIntl();

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li>
          <a
            href='https://fundacjakaszuby.org/'
            rel='external nofollow noreferrer'
            target='_blank'
            title={intl.formatMessage({ id: 'sponsor.kashebianFoundation' })}
          >
            <Image
              src='/images/logo-kaszuby-foundation.png'
              height={60}
              width={200}
              alt={intl.formatMessage({ id: 'sponsor.kashebianFoundation' })}
              role='link'
              title={intl.formatMessage({ id: 'sponsor.kashebianFoundation' })}
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/PowiatChojnicki/'
            rel='external nofollow noreferrer'
            target='_blank'
            title={intl.formatMessage({ id: 'sponsor.countyChojnice' })}
          >
            <Image
              src='/images/herb_powiat_chojnicki.png'
              height={60}
              width={47}
              alt={intl.formatMessage({ id: 'sponsor.countyChojnice' })}
              role='link'
              title={intl.formatMessage({ id: 'sponsor.countyChojnice' })}
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.muzeum.wejherowo.pl/'
            rel='external nofollow noreferrer'
            target='_blank'
            title={intl.formatMessage({ id: 'sponsor.museumWejherowo' })}
          >
            <Image
              src='/images/logo_MPiMK-P.png'
              height={60}
              width={76}
              alt={intl.formatMessage({ id: 'sponsor.museumWejherowo' })}
              role='link'
              title={intl.formatMessage({ id: 'sponsor.museumWejherowo' })}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
