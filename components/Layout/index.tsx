import Header from '../Header';
import Footer from '../Footer';
import React from 'react';
import styles from './styles.module.css';
import { ThemeProvider } from '@mui/material';
import theme from '../../styles/theme';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
