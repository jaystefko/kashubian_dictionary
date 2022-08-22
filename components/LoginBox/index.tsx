import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles.module.css';

const LoginBox = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const setter = (
    set: Dispatch<SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>
  ) => set(event.target.value);

  const formDataSender = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!(login && password)) {
      console.log('Login i hasło są konieczne do zalogowania się.');
      return;
    }

    try {
      const result = await fetch('');
      console.log('great success');
      // save data from logging
      // navigate to "/admin"
    } catch (error) {
      console.log('Podane dane są nieprawidłowe');
    }
  };

  return (
    <div className={styles.wholePage}>
      <form className={styles.form}>
        <input
          type='text'
          placeholder='Login...'
          value={login}
          onChange={setter.bind(this, setLogin)}
          required
        />
        <input
          type='password'
          placeholder='Hasło...'
          value={password}
          onChange={setter.bind(this, setPassword)}
          required
        />
        <button type='submit' onClick={formDataSender}>
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
