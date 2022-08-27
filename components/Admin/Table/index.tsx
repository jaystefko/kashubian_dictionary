import { Delete, Edit } from '@mui/icons-material';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Word } from '../../../utils/types';

import styles from './styles.module.css';

type AdminTableProps = {
  data: Array<Partial<Word>>;
  openModalEditHandler: (id: number) => void;
  deleteHandler: (id: number, word: string) => void;
};

const AdminTable = ({ data, openModalEditHandler, deleteHandler }: AdminTableProps) => {
  return (
    <section className={styles.section}>
      {data.length ? (
        <TableContainer component={Paper} className={styles.table}>
          <Table stickyHeader aria-label='Tablica słów'>
            <TableHead>
              <TableRow>
                <TableCell className={styles.headerCell}>Słowo</TableCell>
                <TableCell className={styles.headerCell} align='right'>
                  Edycja
                </TableCell>
                <TableCell className={styles.headerCell} align='right'>
                  Usunięcie
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell className={styles.cell} component='th' scope='row'>
                    {row.word}
                  </TableCell>
                  <TableCell className={styles.cell} align='right'>
                    <Button
                      onClick={openModalEditHandler.bind(this, row.id || -1)}
                      className={styles.button}
                    >
                      <Edit className={styles.icon} />
                    </Button>
                  </TableCell>
                  <TableCell className={styles.cell} align='right'>
                    <Button
                      onClick={deleteHandler.bind(this, row.id || -1, row.word || '')}
                      className={styles.button}
                    >
                      <Delete className={styles.icon} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </section>
  );
};

export default AdminTable;
