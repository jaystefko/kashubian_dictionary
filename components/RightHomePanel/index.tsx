import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Card, CardContent, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { getLastAddedWordList, getWordOfADay } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { WordOfADay } from '../../utils/types';
import styles from './styles.module.css';

const RightHomePanel = () => {
  const router = useRouter();
  const [wordOfADay, setWordOfADay] = useState<WordOfADay>();
  const [lastWordList, setLastWordList] = useState<Array<{ id: number; word: string }>>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const wordOfADayResponse = await getWordOfADay();
        const lastAddedWordListResponse = await getLastAddedWordList();
        setLastWordList(
          lastAddedWordListResponse.data?.data?.findAllKashubianEntries?.select || []
        );
        setWordOfADay(wordOfADayResponse.data);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, []);

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
          id='basic-button'
          aria-controls={Boolean(anchorEl) ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
          onClick={clickHandler}
          endIcon={<KeyboardArrowDown />}
        >
          <FormattedMessage id='lastAddedWords' />
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeHandler}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
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
          <Link href={`word/${wordOfADay?.entryId}`} className={styles.link}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  <FormattedMessage id='wordOfADay' />
                </Typography>
                <Typography variant='h5' component='div'>
                  {wordOfADay?.word}
                </Typography>
                <Typography variant='body2'>{wordOfADay?.definitions[0] || ''}</Typography>
              </CardContent>
            </Card>
          </Link>
        ) : (
          ''
        )}
      </section>
    </article>
  );
};

export default RightHomePanel;
