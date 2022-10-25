import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { getLastAddedWordList, getWordOfADay } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { WordOfADay } from '../../utils/types';
import styles from './styles.module.css';

const RightHomePanel = () => {
  const router = useRouter();
  const intl = useIntl();
  const [wordOfADay, setWordOfADay] = useState<WordOfADay>();
  const [lastWordList, setLastWordList] = useState<Array<{ id: number; word: string }>>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const lastAddedWordListResponse = await getLastAddedWordList();
        setLastWordList(
          lastAddedWordListResponse.data?.data?.findAllKashubianEntries?.select || []
        );
      } catch (error) {
        errorHandler(error, intl);
      }
    })();
  }, []); // eslint-disable-line

  useEffect(() => {
    (async () => {
      try {
        const wordOfADayResponse = await getWordOfADay();
        setWordOfADay(wordOfADayResponse.data);
      } catch (error) {
        errorHandler(error, intl);
      }
    })();
  }, []); // eslint-disable-line

  const navigateTo = (id: number) => router.push(`word/${id}`);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <article className={styles.article}>
      <section>
        <Button
          id='last-added-word-list'
          variant='outlined'
          aria-controls={Boolean(anchorEl) ? 'last-added-word-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
          onClick={clickHandler}
          endIcon={<KeyboardArrowDown />}
        >
          {intl.formatMessage({ id: 'lastAddedWords' })}
        </Button>
        <Menu
          id='last-added-word-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeHandler}
          MenuListProps={{
            'aria-labelledby': 'last-added-word-list',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            style: {
              width: '21vw',
              minWidth: 247,
            },
          }}
        >
          {lastWordList.map((word, index) => (
            <MenuItem key={index} onClick={navigateTo.bind(this, word.id)}>
              {word.word}
            </MenuItem>
          ))}
        </Menu>
      </section>
      <section>
        {wordOfADay ? (
          <>
            <h2 className={styles.woadHeader}>{intl.formatMessage({ id: 'wordOfADay' })}</h2>
            <article className={styles.woadContainer}>
              <Link href={`word/${wordOfADay?.entryId}`}>
                <a className={styles.woadLink}>{wordOfADay.word}</a>
              </Link>
              <p className={styles.woadText}>{wordOfADay?.definitions[0] || ''}</p>
            </article>
          </>
        ) : (
          ''
        )}
      </section>
    </article>
  );
};

export default RightHomePanel;
