import styles from './Genre.module.css';

function Genre({genres}) {
  return <span className={styles.genre}>{genres}</span>;
}

export default Genre;
