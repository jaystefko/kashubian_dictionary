import Link from 'next/link';
import { useIntl } from 'react-intl';
import { LOCALES, MeaningSimplified } from '../../utils/types';
import { getTranslationByLocale } from '../../utils/utilities';
import styles from './styles.module.css';

type Props = {
  data: Array<MeaningSimplified>;
  word: string;
  wordId: string;
};

function MeaningList({ word, data, wordId }: Props) {
  const intl = useIntl();
  const translatePath = getTranslationByLocale(intl.locale as LOCALES);

  return (
    <article className={styles.wordContainer}>
      <header>
        <h1 className={styles.word}>{word}</h1>
      </header>
      <main>
        <header>
          <b>{intl.formatMessage({ id: 'multipleMeanings' })}</b>
        </header>
        <ul className={styles.list}>
          {data.map((meaning, index) => (
            <li key={index}>
              <Link href={`/word/${wordId}/meaning/${meaning.id}`}>
                <a>
                  <b>{meaning.translation[translatePath]}</b>
                  {` ~ ${meaning.definition}`}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </article>
  );
}

export default MeaningList;
