import type { NextPage } from 'next';
import DictionaryPanel from '../components/DictionaryPanel';
import RightHomePanel from '../components/RightHomePanel';
import Search from '../components/Search';
import styles from '../styles/home.module.css';

const HomeScreen: NextPage = () => {
  return (
    <div className={styles.container}>
      <DictionaryPanel />
      <article className={styles.searchContainer}>
        <Search />
      </article>
      <RightHomePanel />
    </div>
  );
};

export default HomeScreen;
