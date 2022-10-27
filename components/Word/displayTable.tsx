import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useIntl } from 'react-intl';
import { SUB_PARTS_OF_SPEECH } from '../../utils/types';

function DisplayTable(data: Record<string, string>, paramName: string, spos: SUB_PARTS_OF_SPEECH) {
  const intl = useIntl();

  switch (paramName) {
    case 'nounVariation': {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{intl.formatMessage({ id: 'singular' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'multiple' })}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.nominative' })}</TableCell>
              <TableCell>{data?.nominative || '-'}</TableCell>
              <TableCell>{data?.nominativePlural || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.genitive' })}</TableCell>
              <TableCell>{data?.genitive || '-'}</TableCell>
              <TableCell>{data?.genitivePlural || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.dative' })}</TableCell>
              <TableCell>{data?.dative || '-'}</TableCell>
              <TableCell>{data?.dativePlural || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.accusative' })}</TableCell>
              <TableCell>{data?.accusative || '-'}</TableCell>
              <TableCell>{data?.accusativePlural || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.instrumental' })}</TableCell>
              <TableCell>{data?.instrumental || '-'}</TableCell>
              <TableCell>{data?.instrumentalPlural || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.locative' })}</TableCell>
              <TableCell>{data?.locative || '-'}</TableCell>
              <TableCell>{data?.locativePlural || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.vocative' })}</TableCell>
              <TableCell>{data?.vocative || '-'}</TableCell>
              <TableCell>{data?.vocativePlural || '-'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    }
    default:
      return <></>;
  }
}

export default DisplayTable;
