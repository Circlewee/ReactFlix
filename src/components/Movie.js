import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Genre from './Genre';
import styles from './Movie.module.css';

function Movie({id, mediumCoverImage, title, summary, genres}) {
  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__poster}
        src={mediumCoverImage}
        alt={title}
      />
      <div className={styles.movie__info}>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={styles.movie__genre}>
          {genres.map((g) => {
            return <Genre key={g} genres={g} />;
          })}
        </div>
        <p className={styles.movie__summary}>
          {summary.length > 250 ? summary.slice(0, 250) + '...' : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
