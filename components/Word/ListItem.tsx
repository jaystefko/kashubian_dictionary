import styles from './styles.module.css';

type Props = {
  property: string;
  content?: string | JSX.Element;
  isVariation?: Boolean;
};

function ListItem({ property, content, isVariation = false }: Props) {
  const variationStyles = isVariation ? ` ${styles.variation}` : '';
  return content ? (
    <li className={`${styles.listItem}${variationStyles}`}>
      <span className={`${styles.property}${variationStyles}`}>{property}</span>
      <span className={`${styles.content}${variationStyles}`}>{content}</span>
    </li>
  ) : (
    <></>
  );
}

export default ListItem;
