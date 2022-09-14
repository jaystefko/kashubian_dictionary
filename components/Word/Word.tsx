import { GatheredWord } from '../../utils/types';
import { useIntl, FormattedMessage } from 'react-intl';

type Props = {
  word: Partial<GatheredWord>;
};

const WordScreen = ({ word }: Props) => {
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
      <main>
        <h3>{intl.formatMessage({ id: 'meanings' })}</h3>
        {word.meanings?.map((meaning, index) => (
          <p key={index}>
            <b>{meaning.translation?.[0]?.polish}</b> - <span>{meaning?.definition}</span>
          </p>
        ))}
        <h3>{intl.formatMessage({ id: 'notes' })}</h3>
        <p>{word.note}</p>
      </main>
    </article>
  );
};

export default WordScreen;
