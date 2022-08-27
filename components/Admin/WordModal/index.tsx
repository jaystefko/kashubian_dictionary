import { Button, Modal } from '@mui/material';
import { Dispatch, SetStateAction, useEffect } from 'react';
import errorHandler from '../../../utils/errorHandler';

type WordModalProps = {
  isModalOpen: boolean;
  wordId: number;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const WordModal = ({ isModalOpen, wordId, setIsModalOpen }: WordModalProps) => {
  useEffect(() => {
    if (wordId === -1) return;
    (async () => {
      try {
        const response = await fetch('');
        console.log(response);
      } catch (error) {
        errorHandler(error);
      }
    })();
  }, [wordId]);

  return (
    <Modal open={isModalOpen}>
      <div>
        <p>{wordId}</p>
        <Button onClick={setIsModalOpen.bind(this, false)}>Close modal</Button>
      </div>
    </Modal>
  );
};

export default WordModal;
