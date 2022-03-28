import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movielist, setMovieList] = useState([]);

  const getMovieList = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    );
    const json = await response.json();
    setMovieList(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.movie__loading}></div>
      ) : (
        <div className={styles.home__grid__container}>
          {movielist.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              mediumCoverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
