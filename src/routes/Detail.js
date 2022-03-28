import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Movie_detail from '../components/Movie_detail';
import style_home from './Home.module.css';

// movie detail
function Detail() {
  const id = useParams().id;
  const [loadState, setLoadState] = useState(true);
  const [detailMovieInfo, setDetailMovieInfo] = useState(null);

  const getDetailMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetailMovieInfo(json.data.movie);
    setLoadState(false);
  };

  useEffect(() => {
    getDetailMovie();
  }, []);

  // useParams()로 url에 붙는 인자를 알아낼 수 있음
  // ...url/:(something)  ==>  useParams().(something)
  return (
    <>
      {loadState ? (
        <div className={style_home.movie__loading}></div>
      ) : (
        <div>
          <Movie_detail
            key={detailMovieInfo.id}
            id={detailMovieInfo.id}
            backgroundImage={detailMovieInfo.background_image}
            mediumCoverImage={detailMovieInfo.medium_cover_image}
            title={detailMovieInfo.title}
            summary={detailMovieInfo.description_intro}
            genres={detailMovieInfo.genres}
          />
        </div>
      )}
    </>
  );
}

export default Detail;
