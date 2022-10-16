import type { NextPage } from 'next';
import DictionaryPanel from '../components/DictionaryPanel';
import FundInfo from '../components/FundInfo';
import RightHomePanel from '../components/RightHomePanel';
import Search from '../components/Search';
import styles from '../styles/home.module.css';

const HomeScreen: NextPage = () => {
  return (
    <div className={styles.container}>
      <DictionaryPanel />
      <article className={styles.searchContainer}>
        <FundInfo />
        <Search />
      </article>
      <RightHomePanel />
    </div>
  );
};

export default HomeScreen;
