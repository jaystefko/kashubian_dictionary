import { GatheredWord } from '../../utils/types';
import { useIntl } from 'react-intl';
import styles from './styles.module.css';
import Link from 'next/link';

type Props = {
  word: Partial<GatheredWord>;
};

const WordScreen = ({ word }: Props) => {
  const intl = useIntl();

  // console.log(intl.locale, intl.defaultLocale);

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
          {word.partOfSpeechSubType === word.partOfSpeech ? (
            ''
          ) : (
            <li className={styles.listItem}>
              <span className={styles.property}>
                {intl.formatMessage({ id: `SUB_PARTS_OF_SPEECH` })}
              </span>
              <span className={styles.content}>
                {intl.formatMessage({ id: `SUB_PARTS_OF_SPEECH.${word.partOfSpeechSubType}` })}
              </span>
            </li>
          )}
          {/* <li className={styles.listItem}>
            <span className={styles.property}>{intl.formatMessage({ id: 'meanings' })}</span>
            <span className={styles.content}>
              {word.meanings!.map((m, index) => (
                <div key={index}>
                  <span>{`${intl.formatMessage({ id: 'definition' })}: ${m.definition}`}</span>
                  <span>{`${intl.formatMessage({ id: 'definition' })}: ${m.definition}`}</span>
                  {m.origin ? <p>{`${intl.formatMessage({ id: 'origin' })}: ${m.origin}`}</p> : ''}
                </div>
              ))}
            </span>
          </li> */}
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
          {word.note ? (
            <li className={styles.listItem}>
              <span className={styles.property}>{intl.formatMessage({ id: 'note' })}</span>
              <span className={styles.content}>{word.note}</span>
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
