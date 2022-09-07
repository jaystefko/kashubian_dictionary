import { useIntl } from 'react-intl';
import styles from './styles.module.css';

const WorkInProgress = ({ is404 = false }) => {
  const intl = useIntl();

  const header = intl.formatMessage({ id: `wip.${is404 ? '404' : 'not404'}.header` });
  const main = intl.formatMessage({ id: `wip.${is404 ? '404' : 'not404'}.message` });

  return (
    <div className={styles.wholePage}>
      <article className={styles.box}>
        <header>
          <h1 className={styles.header}>{header}</h1>
        </header>
        <main>
          <p>{main}</p>
        </main>
      </article>
    </div>
  );
};

export default WorkInProgress;
