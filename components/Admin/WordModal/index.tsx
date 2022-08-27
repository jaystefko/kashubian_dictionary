import { Button, Modal } from '@mui/material';
import { useEffect } from 'react';
import { BasicAuth, Word } from '../../../utils/types';

type WordModalProps = {
  isModalOpen: boolean;
  wordId: number;
  closeHandler: () => void;
  word?: Partial<Word>;
  saveHandler: (word: Partial<Word>, id: number, authorisation: BasicAuth) => void;
};

const WordModal = ({ isModalOpen, wordId, closeHandler, word }: WordModalProps) => {
  useEffect(() => {
    if (word) console.log(word); // #TODO
  }, [word]);

  return (
    <Modal open={isModalOpen}>
      <div>
        <p>{wordId}</p>
        <Button onClick={closeHandler.bind(this)}>Close modal</Button>
      </div>
    </Modal>
  );
};

export default WordModal;
