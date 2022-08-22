import type { NextPage } from 'next'
import DictionaryPanel from '../components/DictionaryPanel'
import RightHomePanel from '../components/RightHomePanel'
import styles from '../styles/home.module.css'

const HomeScreen: NextPage = () => {
  return (
    <div className={styles.main}>
      <DictionaryPanel />
      <article className={styles.mainPanel}>
        <section>Search for a word</section>
      </article>
      <RightHomePanel />
    </div>
  )
}

export default HomeScreen
