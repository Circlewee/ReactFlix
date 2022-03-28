import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Genre from './Genre';
import styles from './Movie_detail.module.css';

function Movie_detail({
  id,
  backgroundImage,
  mediumCoverImage,
  title,
  summary,
  genres,
}) {
  return (
    <div>
      <img
        className={styles.background__image}
        src={backgroundImage}
        alt={title}
      />
      <div className={styles.movie}>
        <img
          className={styles.movie__poster}
          src={mediumCoverImage}
          alt={title}
        />
        <div className={styles.movie__info}>
          <h2 className={styles.movie__title}>
            <span>{title}</span>
          </h2>
          <div className={styles.movie__genre}>
            {genres.map((g) => {
              return <Genre key={g} genres={g} />;
            })}
          </div>
          <p>
            {summary.length > 250 ? summary.slice(0, 250) + '...' : summary}
          </p>
        </div>
      </div>
    </div>
  );
}

Movie_detail.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie_detail;
