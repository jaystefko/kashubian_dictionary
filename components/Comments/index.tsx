import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { sendEmail } from '../../utils/api';
import errorHandler from '../../utils/errorHandler';
import styles from './styles.module.css';

const Comments = () => {
  const intl = useIntl();

  const [contactEmail, setContactEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function send() {
    try {
      setIsLoading(true);
      await sendEmail({ contactEmail, subject, content });
      toast.info(intl.formatMessage({ id: 'mail_send' }));
      setContactEmail('');
      setSubject('');
      setContent('');
    } catch (error) {
      errorHandler(error, intl);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='whole-page'>
      <article className={styles.box}>
        <header>
          <h1>{intl.formatMessage({ id: 'topMenu.comments' })}</h1>
        </header>
        <main>
          <div className={styles.formContainer}>
            <div className={styles.topLine}>
              <TextField
                fullWidth
                value={subject}
                placeholder={`${intl.formatMessage({ id: 'subject' })}...`}
                label={intl.formatMessage({ id: 'subject' })}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type='email'
                value={contactEmail}
                placeholder={`${intl.formatMessage({ id: 'contactEmail' })}...`}
                label={intl.formatMessage({ id: 'contactEmail' })}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
            </div>
            <TextField
              fullWidth
              value={content}
              placeholder={`${intl.formatMessage({ id: 'content' })}...`}
              label={intl.formatMessage({ id: 'content' })}
              onChange={(e) => setContent(e.target.value)}
              required
              multiline
              rows={4}
            />
          </div>
        </main>
        <footer className={styles.mailFooter}>
          <Button
            onClick={send}
            disabled={isLoading || contactEmail === '' || content === '' || subject === ''}
          >
            {intl.formatMessage({ id: 'send' })}
          </Button>
        </footer>
      </article>
    </div>
  );
};

export default Comments;
