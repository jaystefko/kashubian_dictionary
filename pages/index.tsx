import type { NextPage } from 'next';
import DictionaryPanel from '../components/DictionaryPanel';
import RightHomePanel from '../components/RightHomePanel';
import Search from '../components/Search';

const HomeScreen: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <DictionaryPanel />
      <article style={{ display: 'flex', alignItems: 'center', width: '30vw' }}>
        <Search />
      </article>
      <RightHomePanel />
    </div>
  );
};

export default HomeScreen;
