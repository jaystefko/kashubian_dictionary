import { useIntl } from 'react-intl';
import { SUB_PARTS_OF_SPEECH, Variation } from '../../utils/types';
import DisplayTable from './displayTable';

const getValue = (obj: Record<string, string>) =>
  Object.keys(obj).filter((inside) => Boolean(obj[inside]));

const getFullValues = (obj: Variation) =>
  Object.keys(obj).filter((inside) =>
    typeof obj[inside] === 'string'
      ? Boolean(obj[inside])
      : getValue(obj[inside] as Record<string, string>).length
  );

function DisplayVariation(spos: SUB_PARTS_OF_SPEECH, variation?: Variation) {
  const intl = useIntl();

  if (!variation) return '';

  const values = getFullValues(variation);

  if (!values.length) return '';

  const responseList = values.map((property) => {
    if (typeof variation[property] === 'string')
      return (
        <span>
          {intl.formatMessage({ id: property })}: {variation[property] as string}
        </span>
      );
    return DisplayTable(variation[property] as Record<string, string>, property, spos);
  });

  return <>{responseList}</>;
}

export default DisplayVariation;