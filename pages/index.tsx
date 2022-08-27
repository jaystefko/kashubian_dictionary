import type { NextPage } from 'next';
import DictionaryPanel from '../components/DictionaryPanel';
import RightHomePanel from '../components/RightHomePanel';

const HomeScreen: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <DictionaryPanel />
      <article style={{ display: 'flex', alignItems: 'center' }}>
        <section>Search for a word</section>
      </article>
      <RightHomePanel />
    </div>
  );
};

export default HomeScreen;
