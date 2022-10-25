import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { getMeaning, getWordSimplified } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { COLORS, GatheredMeaning, GatheredWord } from '../../utils/types';
import WorkInProgress from '../WorkInProgress';
import WordScreen from './Word';

export default function WordScreenWrapper() {
  const router = useRouter();
  const wordId = router.query.wordId as string;
  const meaningId = router.query.meaningId as string;
  const intl = useIntl();

  const [isLoading, setIsLoading] = useState(true);
  const [word, setWord] = useState<Partial<GatheredWord> | null>(null);
  const [meaning, setMeaning] = useState<Partial<GatheredMeaning> | null>(null);

  useEffect(() => {
    (async () => {
      if (wordId && meaningId) {
        try {
          const wordResponse = await getWordSimplified(Number(wordId));
          const meaningResponse = await getMeaning(Number(meaningId));
          setWord(wordResponse.data.data.findKashubianEntry);
          setMeaning(meaningResponse.data.data.findMeaning);
        } catch (error) {
          errorHandler(error, intl);
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [wordId, meaningId]); // eslint-disable-line

  return (
    <div className='whole-page'>
      {isLoading ? (
        <CircularProgress sx={{ color: COLORS.YELLOW }} />
      ) : word && meaning ? (
        <WordScreen word={word} meaning={meaning} />
      ) : (
        <WorkInProgress is404 />
      )}
    </div>
  );
}
