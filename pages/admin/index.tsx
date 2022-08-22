import type { NextPage } from 'next';
import { useEffect } from 'react';
import LoginBox from '../../components/LoginBox';

const AdminScreen: NextPage = () => {
  useEffect(() => {
    (async () => {
      let auth = localStorage.getItem('auth');
      if (!auth) {
        const username = (await prompt('Fill in your login', '')) || '';
        console.log(username);
        const password = (await prompt('Fill in your password', '')) || '';
        console.log(password);
        localStorage.setItem('auth', JSON.stringify({ username, password }));
      }
    })();
  }, []); // eslint-disable-line

  return <LoginBox />;
};

export default AdminScreen;
