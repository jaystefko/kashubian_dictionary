import { GatheredWord } from '../../utils/types';
import { useIntl } from 'react-intl';
import styles from './styles.module.css';
import Link from 'next/link';

type Props = {
  word: Partial<GatheredWord>;
};

const WordScreen = ({ word }: Props) => {
  const intl = useIntl();

  // style={{ scrollbarWidth: 'none', width: '60vw' }}>

  return (
    <article className={styles.wordContainer}>
      <header>
        <h1 className={styles.word}>{word.word}</h1>
      </header>
      <main>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.property}>{intl.formatMessage({ id: `PARTS_OF_SPEECH` })}</span>
            <span className={styles.content}>
              {intl.formatMessage({ id: `PARTS_OF_SPEECH.${word.partOfSpeech}` })}
            </span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.property}>
              {intl.formatMessage({ id: `SUB_PARTS_OF_SPEECH` })}
            </span>
            <span className={styles.content}>
              {intl.formatMessage({ id: `SUB_PARTS_OF_SPEECH.${word.partOfSpeechSubType}` })}
            </span>
          </li>
          {word.base ? (
            <li className={styles.listItem}>
              <span className={styles.property}>{intl.formatMessage({ id: 'word.base' })}</span>
              <span className={styles.content}>
                <Link href={`/word/${word.base.id}`}>{word.base.word}</Link>
              </span>
            </li>
          ) : (
            ''
          )}
          {word.others?.length ? (
            <li className={styles.listItem}>
              <span className={styles.property}>{intl.formatMessage({ id: 'word.others' })}</span>
              <span className={styles.content}>
                {word.others.map((o, index) => (
                  <Link key={index} href={`/word/${o.other.id}`}>
                    {`${o.other.word}${index === word.others!.length - 1 ? '' : ','}`}
                  </Link>
                ))}
              </span>
            </li>
          ) : (
            ''
          )}
        </ul>
      </main>
    </article>
  );
};

export default WordScreen;
