import { Delete, Edit, RecordVoiceOver } from '@mui/icons-material';
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
import { useIntl } from 'react-intl';
import { GatheredWord } from '../../../utils/types';

type AdminTableProps = {
  data: Array<Partial<GatheredWord>>;
  openModalEditHandler: (id: number) => void;
  openModalSoundHandler: (id: number) => void;
  deleteHandler: (id: number, word: string) => void;
};

const AdminTable = ({
  data,
  openModalEditHandler,
  openModalSoundHandler,
  deleteHandler,
}: AdminTableProps) => {
  const intl = useIntl();

  return (
    <section style={{ width: '60vw', height: '60vh' }}>
      {data.length ? (
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label={intl.formatMessage({ id: 'wordTable' })}>
            <TableHead style={{ height: 30 }}>
              <TableRow>
                <TableCell>{intl.formatMessage({ id: 'word' })}</TableCell>
                <TableCell>{intl.formatMessage({ id: 'sound' })}</TableCell>
                <TableCell align='right'>{intl.formatMessage({ id: 'edit' })}</TableCell>
                <TableCell align='right'>{intl.formatMessage({ id: 'delete' })}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id!}>
                  <TableCell>{row.word}</TableCell>
                  <TableCell>
                    <Button onClick={openModalSoundHandler.bind(this, row.id!)}>
                      <RecordVoiceOver />
                    </Button>
                  </TableCell>
                  <TableCell align='right'>
                    <Button onClick={openModalEditHandler.bind(this, row.id!)}>
                      <Edit />
                    </Button>
                  </TableCell>
                  <TableCell align='right'>
                    <Button onClick={deleteHandler.bind(this, row.id!, row.word!)}>
                      <Delete />
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
