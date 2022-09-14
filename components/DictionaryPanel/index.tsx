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
        setWordList(response.data?.data?.SearchKashubianEntries?.select);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, []);

  return (
    <article className={styles.article}>
      <List>
        {wordList.map((word, index) => (
          <ListItemButton key={index} component='a' href={`word/${word.id}`}>
            <ListItemText primary={word.word} />
          </ListItemButton>
        ))}
      </List>
    </article>
  );
};

export default DictionaryPanel;
