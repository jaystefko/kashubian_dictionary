import { GatheredMeaning, GatheredWord, LOCALES } from '../../utils/types';
import { useIntl } from 'react-intl';
import styles from './styles.module.css';
import Link from 'next/link';
import ListItem from './ListItem';
import { getTranslationByLocale } from '../../utils/utilities';

type Props = {
  word: Partial<GatheredWord>;
  meaning: Partial<GatheredMeaning>;
};

const WordScreen = ({ word, meaning }: Props) => {
  const intl = useIntl();
  const translationPath = getTranslationByLocale(intl.locale as LOCALES);

  const translation = meaning.translation![translationPath];
  const definition = meaning.definition;
  const origin = meaning.origin;
  const exampleList = meaning.examples?.map((e) => e.example).join(', ');
  const idiomList = meaning.idioms?.map((p) => p.idiom).join(', ');
  const proVerbList = meaning.proverbs?.map((p) => p.proverb).join(', ');
  const quoteList = meaning.quotes?.map((q) => q.quote).join(', ');
  const hyperonym = meaning.hyperonym?.kashubianEntry;
  const antonymList = meaning.antonyms?.map((a) => a.antonym.kashubianEntry) || [];
  const synonymList = meaning.synonyms?.map((s) => s.synonym.kashubianEntry) || [];

  return (
    <article className={styles.wordContainer}>
      <header>
        <h1 className={styles.word}>{word.word}</h1>
      </header>
      <main>
        <ul className={styles.list}>
          <ListItem
            property={intl.formatMessage({ id: `language.${translationPath}` })}
            content={translation}
          />
          <ListItem property={intl.formatMessage({ id: `definition` })} content={definition} />
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
          <ListItem property={intl.formatMessage({ id: `origin` })} content={origin} />
          <ListItem property={intl.formatMessage({ id: `example` })} content={exampleList} />
          <ListItem property={intl.formatMessage({ id: `idiom` })} content={idiomList} />
          <ListItem property={intl.formatMessage({ id: `proverb` })} content={proVerbList} />
          <ListItem property={intl.formatMessage({ id: `quote` })} content={quoteList} />
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
              hyperonym ? (
                <Link href={`/word/${hyperonym.id}`}>
                  <a>{hyperonym.word}</a>
                </Link>
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
