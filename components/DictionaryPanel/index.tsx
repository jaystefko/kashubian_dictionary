import { List, ListItem } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { getWordList } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import styles from './styles.module.css';

const DictionaryPanel = () => {
  const intl = useIntl();
  const [wordList, setWordList] = useState<
    Array<{ id: string; word: string; normalizedWord: string }>
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getWordList(1000);
        setWordList(response.data?.data?.findAllKashubianEntries?.select || []);
      } catch (error) {
        errorHandler(error, intl);
      }
    })();
  }, []); // eslint-disable-line

  return (
    <article className={styles.dictionaryPanel}>
      <List>
        {wordList.map((word, index) => (
          <ListItem key={index}>
            <Link href={`word/${word.id}`}>{word.word}</Link>
          </ListItem>
        ))}
      </List>
    </article>
  );
};

export default DictionaryPanel;
