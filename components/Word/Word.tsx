import { LOCALES, Word } from '../../utils/types';
import { useIntl, FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';

type Props = {
  word: Partial<Word>;
  isKashebian?: boolean;
};

const WordScreen = ({ word, isKashebian = false }: Props) => {
  let { locale } = useRouter();
  if (!locale) locale = LOCALES.pl;

  const intl = useIntl();
  const pos = intl.formatMessage({ id: `PARTS_OF_SPEECH.${word.partOfSpeech}` });
  const spos = intl.formatMessage({ id: `SUB_PARTS_OF_SPEECH.${word.partOfSpeechSubType}` });

  return (
    <article style={{ scrollbarWidth: 'none', width: '60vw' }}>
      <header>
        <h1>{word.word}</h1>
        <p>
          <FormattedMessage id={`PARTS_OF_SPEECH.${word.partOfSpeech}`} />
          {`${pos} - ${spos}`}
        </p>
      </header>
    </article>
  );
};

export default WordScreen;
