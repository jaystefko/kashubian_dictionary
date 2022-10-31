import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useIntl } from 'react-intl';
import { SUB_PARTS_OF_SPEECH } from '../../utils/types';

function DisplayTable(data: Record<string, string>, paramName: string, spos: SUB_PARTS_OF_SPEECH) {
  const intl = useIntl();

  switch (paramName) {
    case 'gerundiumVariations':
    case 'nounPronounVariation':
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
    case 'activeAdjectivalParticipleVariations':
    case 'passiveAdjectiveParticipleVariationsFirst':
    case 'passiveAdjectiveParticipleVariationsSecond':
    case 'adjectivePronounVariation':
    case 'adjectiveVariation':
    case 'numeralVariation': {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                {intl.formatMessage({ id: 'singular' })}
              </TableCell>
              <TableCell colSpan={2} sx={{ textAlign: 'center' }}>
                {intl.formatMessage({ id: 'multiple' })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.masculine' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.feminine' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.neuter' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.masculinePersonal' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.nonMasculinePersonal' })}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.nominative' })}</TableCell>
              <TableCell>{data?.nominativeMasculine || '-'}</TableCell>
              <TableCell>{data?.nominativeFeminine || '-'}</TableCell>
              <TableCell>{data?.nominativeNeuter || '-'}</TableCell>
              <TableCell>{data?.nominativePluralMasculine || '-'}</TableCell>
              <TableCell>{data?.nominativeNonMasculine || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.genitive' })}</TableCell>
              <TableCell>{data?.genitiveMasculine || '-'}</TableCell>
              <TableCell>{data?.genitiveFeminine || '-'}</TableCell>
              <TableCell>{data?.genitiveNeuter || '-'}</TableCell>
              <TableCell>{data?.genitivePluralMasculine || '-'}</TableCell>
              <TableCell>{data?.genitiveNonMasculine || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.dative' })}</TableCell>
              <TableCell>{data?.dativeMasculine || '-'}</TableCell>
              <TableCell>{data?.dativeFeminine || '-'}</TableCell>
              <TableCell>{data?.dativeNeuter || '-'}</TableCell>
              <TableCell>{data?.dativePluralMasculine || '-'}</TableCell>
              <TableCell>{data?.dativeNonMasculine || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.accusative' })}</TableCell>
              <TableCell>{data?.accusativeMasculine || '-'}</TableCell>
              <TableCell>{data?.accusativeFeminine || '-'}</TableCell>
              <TableCell>{data?.accusativeNeuter || '-'}</TableCell>
              <TableCell>{data?.accusativePluralMasculine || '-'}</TableCell>
              <TableCell>{data?.accusativeNonMasculine || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.instrumental' })}</TableCell>
              <TableCell>{data?.instrumentalMasculine || '-'}</TableCell>
              <TableCell>{data?.instrumentalFeminine || '-'}</TableCell>
              <TableCell>{data?.instrumentalNeuter || '-'}</TableCell>
              <TableCell>{data?.instrumentalPluralMasculine || '-'}</TableCell>
              <TableCell>{data?.instrumentalNonMasculine || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.locative' })}</TableCell>
              <TableCell>{data?.locativeMasculine || '-'}</TableCell>
              <TableCell>{data?.locativeFeminine || '-'}</TableCell>
              <TableCell>{data?.locativeNeuter || '-'}</TableCell>
              <TableCell>{data?.locativePluralMasculine || '-'}</TableCell>
              <TableCell>{data?.locativeNonMasculine || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{intl.formatMessage({ id: 'short.vocative' })}</TableCell>
              <TableCell>{data?.vocativeMasculine || '-'}</TableCell>
              <TableCell>{data?.vocativeFeminine || '-'}</TableCell>
              <TableCell>{data?.vocativeNeuter || '-'}</TableCell>
              <TableCell>{data?.vocativePluralMasculine || '-'}</TableCell>
              <TableCell>{data?.vocativeNonMasculine || '-'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    }
    case 'imperativeModeVariations':
    case 'presentVariations': {
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
              <TableCell>1.</TableCell>
              <TableCell>{data?.firstPersonSingular || '-'}</TableCell>
              <TableCell>{data?.firstPersonPluralFirst || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{data?.firstPersonPluralSecond || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2.</TableCell>
              <TableCell>{data?.secondPersonSingular || '-'}</TableCell>
              <TableCell>{data?.secondPersonPluralFirst || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{data?.secondPersonPluralSecond || '-'}</TableCell>
            </TableRow>
          </TableBody>
          <TableRow>
            <TableCell>3.</TableCell>
            <TableCell>{data?.thirdPersonSingular || '-'}</TableCell>
            <TableCell>{data?.thirdPersonPlural || '-'}</TableCell>
          </TableRow>
        </Table>
      );
    }
    case 'archaicPastVariations':
    case 'pastSecondVariations':
    case 'prePastFirstVariations':
    case 'prePastSecondVariations':
    case 'prePastThirdVariations':
    case 'futureComplexVariationsFirst':
    case 'futureComplexVariationsSecond':
    case 'conditionalModeVariations':
    case 'pastVariations': {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                {intl.formatMessage({ id: 'singular' })}
              </TableCell>
              <TableCell colSpan={2} sx={{ textAlign: 'center' }}>
                {intl.formatMessage({ id: 'multiple' })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.masculine' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.feminine' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.neuter' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.masculinePersonal' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.nonMasculinePersonal' })}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1.</TableCell>
              <TableCell>{data?.firstPersonMasculine || '-'}</TableCell>
              <TableCell>{data?.firstPersonFeminine || '-'}</TableCell>
              <TableCell>{data?.firstPersonNeuter || '-'}</TableCell>
              <TableCell>{data?.firstPersonPluralMasculineFirst || '-'}</TableCell>
              <TableCell>{data?.firstPersonNonMasculineFirst || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{data?.firstPersonPluralSecondMasculine || '-'}</TableCell>
              <TableCell>{data?.firstPersonPluralSecondNonMasculine || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2.</TableCell>
              <TableCell>{data?.secondPersonMasculine || '-'}</TableCell>
              <TableCell>{data?.secondPersonFeminine || '-'}</TableCell>
              <TableCell>{data?.secondPersonNeuter || '-'}</TableCell>
              <TableCell>{data?.secondPersonPluralMasculineFirst || '-'}</TableCell>
              <TableCell>{data?.secondPersonNonMasculineFirst || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{data?.secondPersonPluralMasculineSecond || '-'}</TableCell>
              <TableCell>{data?.secondPersonNonMasculineSecond || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{data?.secondPersonPluralMasculineThird || '-'}</TableCell>
              <TableCell>{data?.secondPersonNonMasculineThird || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3.</TableCell>
              <TableCell>{data?.thirdPersonMasculine || '-'}</TableCell>
              <TableCell>{data?.thirdPersonFeminine || '-'}</TableCell>
              <TableCell>{data?.thirdPersonNeuter || '-'}</TableCell>
              <TableCell>{data?.thirdPersonPluralMasculine || '-'}</TableCell>
              <TableCell>{data?.thirdPersonNonMasculine || '-'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    }
    case 'futureSimpleVariations':
    case 'descriptivePresentVariations': {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                {intl.formatMessage({ id: 'singular' })}
              </TableCell>
              <TableCell colSpan={2} sx={{ textAlign: 'center' }}>
                {intl.formatMessage({ id: 'multiple' })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.masculine' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.feminine' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.neuter' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.masculinePersonal' })}</TableCell>
              <TableCell>{intl.formatMessage({ id: 'short.nonMasculinePersonal' })}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1.</TableCell>
              <TableCell>{data?.firstPersonMasculine || '-'}</TableCell>
              <TableCell>{data?.firstPersonFeminine || '-'}</TableCell>
              <TableCell>{data?.firstPersonNeuter || '-'}</TableCell>
              <TableCell>{data?.firstPersonPluralMasculineFirst || '-'}</TableCell>
              <TableCell>{data?.firstPersonNonMasculineFirst || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{data?.firstPersonPluralMasculineSecond || '-'}</TableCell>
              <TableCell>{data?.firstPersonNonMasculineSecond || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2.</TableCell>
              <TableCell>{data?.secondPersonMasculine || '-'}</TableCell>
              <TableCell>{data?.secondPersonFeminine || '-'}</TableCell>
              <TableCell>{data?.secondPersonNeuter || '-'}</TableCell>
              <TableCell>{data?.secondPersonPluralMasculineFirst || '-'}</TableCell>
              <TableCell>{data?.secondPersonNonMasculineFirst || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{data?.secondPersonPluralMasculineSecond || '-'}</TableCell>
              <TableCell>{data?.secondPersonNonMasculineSecond || '-'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3.</TableCell>
              <TableCell>{data?.thirdPersonMasculine || '-'}</TableCell>
              <TableCell>{data?.thirdPersonFeminine || '-'}</TableCell>
              <TableCell>{data?.thirdPersonNeuter || '-'}</TableCell>
              <TableCell>{data?.thirdPersonPluralMasculine || '-'}</TableCell>
              <TableCell>{data?.thirdPersonNonMasculine || '-'}</TableCell>
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
