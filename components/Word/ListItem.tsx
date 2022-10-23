import styles from './styles.module.css';

type Props = {
  property: string;
  content?: string | JSX.Element;
};

function ListItem({ property, content }: Props) {
  return content ? (
    <li className={styles.listItem}>
      <span className={styles.property}>{property}</span>
      <span className={styles.content}>{content}</span>
    </li>
  ) : (
    <></>
  );
}

export default ListItem;
