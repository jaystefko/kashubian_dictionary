import { List, ListItemButton, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { getWordList } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import styles from './styles.module.css';

const DictionaryPanel = () => {
  const [wordList, setWordList] = useState<
    Array<{ id: string; word: string; normalizedWord: string }>
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getWordList(1000);
        setWordList(response.data?.data?.findAllKashubianEntries?.select || []);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, []);

  return (
    <article className={styles.article}>
      <List>
        {wordList.map((word, index) => (
          <ListItemButton
            key={index}
            component='a'
            href={`word/${word.id}`}
            style={{ margin: 0, padding: '0 4px' }}
          >
            <ListItemText primary={word.word} style={{ fontSize: 16 }} />
          </ListItemButton>
        ))}
      </List>
    </article>
  );
};

export default DictionaryPanel;
