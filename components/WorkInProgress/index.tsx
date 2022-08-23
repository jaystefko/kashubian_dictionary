import styles from './styles.module.css';

const WorkInProgress = ({ is404 = false }) => {
  const header = is404 ? 'Nie znaleziono strony' : 'Strona w budowie';
  const main = is404
    ? 'Nie odnaleźliśmy strony której szukasz.'
    : 'Przepraszamy za niedogodności. Strona w tym momencie jest w budowie.';

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
