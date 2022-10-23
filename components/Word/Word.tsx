import { GatheredWord } from '../../utils/types';
import { useIntl } from 'react-intl';
import styles from './styles.module.css';
import Link from 'next/link';
import ListItem from './ListItem';

type Props = {
  word: Partial<GatheredWord>;
};

const WordScreen = ({ word }: Props) => {
  const intl = useIntl();

  const pl = word.meanings!.map((meaning) => meaning.translation.polish);
  const en = word.meanings!.map((meaning) => meaning.translation.english).filter((m) => m);
  const de = word.meanings!.map((meaning) => meaning.translation.german).filter((m) => m);
  const uk = word.meanings!.map((meaning) => meaning.translation.ukrainian).filter((m) => m);
  const definitionList = word.meanings!.map((meaning) => meaning.definition);
  const originList = word.meanings!.map((meaning) => meaning.origin).filter((o) => o);
  const exampleList = word.meanings!.map(
    (meaning) => meaning.examples?.map((e) => e.example).join(', ') || ''
  );
  const idiomList = word.meanings!.map(
    (meaning) => meaning.idioms?.map((p) => p.idiom).join(', ') || ''
  );
  const proVerbList = word.meanings!.map(
    (meaning) => meaning.proverbs?.map((p) => p.proverb).join(', ') || ''
  );
  const quoteList = word.meanings!.map(
    (meaning) => meaning.quotes?.map((q) => q.quote).join(', ') || ''
  );
  const hyperonymList = word
    .meanings!.map((meaning) => meaning.hyperonym?.kashubianEntry)
    .filter((h) => h);
  const antonymList = word
    .meanings!.map(
      (meaning) =>
        meaning.antonyms
          ?.filter((a) => a.antonym.kashubianEntry)
          .map((a) => a.antonym.kashubianEntry) || []
    )
    .flat();
  const synonymList = word
    .meanings!.map(
      (meaning) =>
        meaning.synonyms
          ?.filter((s) => s.synonym.kashubianEntry)
          .map((s) => s.synonym.kashubianEntry) || []
    )
    .flat();

  return (
    <article className={styles.wordContainer}>
      <header>
        <h1 className={styles.word}>{word.word}</h1>
      </header>
      <main>
        <ul className={styles.list}>
          <ListItem
            property={intl.formatMessage({ id: `language.polish` })}
            content={pl.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `language.english` })}
            content={en.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `language.german` })}
            content={de.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `language.ukrainian` })}
            content={uk.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `definition` })}
            content={definitionList.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `PARTS_OF_SPEECH` })}
            content={intl.formatMessage({ id: `PARTS_OF_SPEECH.${word.partOfSpeech}` })}
          />
          <ListItem
            property={intl.formatMessage({ id: `SUB_PARTS_OF_SPEECH` })}
            content={
              word.partOfSpeechSubType === word.partOfSpeech
                ? ''
                : intl.formatMessage({
                    id: `SUB_PARTS_OF_SPEECH.${word.partOfSpeechSubType}`,
                  })
            }
          />
          {/* *** VARIATION #TODO *** */}
          <ListItem
            property={intl.formatMessage({ id: `origin` })}
            content={originList.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `examples` })}
            content={exampleList.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `idioms` })}
            content={idiomList.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `proverbs` })}
            content={proVerbList.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `quotes` })}
            content={quoteList.join(', ')}
          />
          <ListItem
            property={intl.formatMessage({ id: `word.base` })}
            content={
              word.base ? (
                <Link href={`/word/${word.base.id}`}>
                  <a>
                    <span>{word.base.word}</span>
                  </a>
                </Link>
              ) : (
                ''
              )
            }
          />
          <ListItem
            property={intl.formatMessage({ id: `word.others` })}
            content={
              word?.others?.length ? (
                <>
                  {word?.others?.map((o, index) => (
                    <Link key={index} href={`/word/${o.other.id}`}>
                      <a>
                        <span>{`${o.other.word}${
                          index === word.others!.length - 1 ? '' : ','
                        }`}</span>
                      </a>
                    </Link>
                  ))}
                </>
              ) : (
                ''
              )
            }
          />
          <ListItem
            property={intl.formatMessage({ id: `hyperonyms` })}
            content={
              hyperonymList.length ? (
                <>
                  {hyperonymList.map((h, index) => (
                    <Link key={index} href={`/word/${h?.id}`}>
                      <a>
                        <span>{`${h?.word}${index === hyperonymList.length - 1 ? '' : ','}`}</span>
                      </a>
                    </Link>
                  ))}
                </>
              ) : (
                ''
              )
            }
          />
          <ListItem
            property={intl.formatMessage({ id: `synonyms` })}
            content={
              synonymList.length ? (
                <>
                  {synonymList.map((s, index) => (
                    <Link key={index} href={`/word/${s?.id}`}>
                      <a>
                        <span>{`${s?.word}${index === synonymList.length - 1 ? '' : ','}`}</span>
                      </a>
                    </Link>
                  ))}
                </>
              ) : (
                ''
              )
            }
          />
          <ListItem
            property={intl.formatMessage({ id: `antonyms` })}
            content={
              antonymList.length ? (
                <>
                  {antonymList.map((a, index) => (
                    <Link key={index} href={`/word/${a?.id}`}>
                      <a>
                        <span>{`${a?.word}${index === antonymList!.length - 1 ? '' : ','}`}</span>
                      </a>
                    </Link>
                  ))}
                </>
              ) : (
                ''
              )
            }
          />
          <ListItem property={intl.formatMessage({ id: `note` })} content={word.note} />
        </ul>
      </main>
    </article>
  );
};

export default WordScreen;
