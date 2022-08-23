import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import LoginBox from '../../components/LoginBox';
import { getWordList } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import { BasicAuth } from '../../utils/types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminScreen: NextPage = () => {
  const [auth, setAuth] = useState<BasicAuth>();

  useEffect(() => {
    let data = localStorage.getItem('auth');
    if (!data) {
      const username = prompt('Fill in your login', '') || '';
      const password = prompt('Fill in your password', '') || '';
      setAuth({ username, password });
    } else {
      setAuth(JSON.parse(data));
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    (async () => {
      if (!auth) return;

      try {
        localStorage.setItem('auth', JSON.stringify(auth));
        const response = await getWordList();
        console.log(response.data);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, [auth]);

  return (
    <>
      <ToastContainer theme='colored' />
      <LoginBox />
    </>
  );
};

export default AdminScreen;
