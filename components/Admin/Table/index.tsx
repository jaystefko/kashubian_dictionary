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
import {
  buttonSX,
  iconSX,
  paperSX,
  tableCellSX,
  tableContainerSX,
  tableHeaderCellSX,
  tableSX,
} from '../../../styles/sx';
import { Word } from '../../../utils/types';

type AdminTableProps = {
  data: Array<Partial<Word>>;
  openModalEditHandler: (id: number) => void;
  deleteHandler: (id: number, word: string) => void;
};

const AdminTable = ({ data, openModalEditHandler, deleteHandler }: AdminTableProps) => {
  return (
    <section style={{ width: '60vw', height: '60vh' }}>
      {data.length ? (
        <Paper sx={paperSX}>
          <TableContainer sx={tableContainerSX}>
            <Table sx={tableSX} stickyHeader aria-label='Tablica słów'>
              <TableHead>
                <TableRow>
                  <TableCell sx={tableHeaderCellSX}>Słowo</TableCell>
                  <TableCell sx={tableHeaderCellSX} align='right'>
                    Edycja
                  </TableCell>
                  <TableCell sx={tableHeaderCellSX} align='right'>
                    Usunięcie
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={tableCellSX} component='th' scope='row'>
                      {row.word}
                    </TableCell>
                    <TableCell sx={tableCellSX} align='right'>
                      <Button onClick={openModalEditHandler.bind(this, row.id || -1)} sx={buttonSX}>
                        <Edit sx={iconSX} />
                      </Button>
                    </TableCell>
                    <TableCell sx={tableCellSX} align='right'>
                      <Button
                        onClick={deleteHandler.bind(this, row.id || -1, row.word || '')}
                        sx={buttonSX}
                      >
                        <Delete sx={iconSX} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : null}
    </section>
  );
};

export default AdminTable;
