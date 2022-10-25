import styles from './styles.module.css';

function FundInfo() {
  return (
    <section style={{ textAlign: 'center' }}>
      <p className={styles.fundInfo}>
        Tu powstaje słownik języka kaszubskiego. Możesz pomóc w jego powstaniu. Wystarczy wejść na
        stronę:
        <br />
        <a href='https://zrzutka.pl/5xw6zz' rel='external nofollow noreferrer' target='_blank'>
          https://zrzutka.pl/5xw6zz
        </a>
      </p>
    </section>
  );
}

export default FundInfo;
