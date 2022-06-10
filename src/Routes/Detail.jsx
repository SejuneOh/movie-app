import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import loadingStyle from '../Routes/Home.module.css'
import styles from './Detail.module.css'



export default function Detail() {

  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    // console.log(json.data.movie.genres);
    setMovie(json.data.movie)
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, [])

  return (
    <>
      {loading ? (<div className={loadingStyle.loader}>
        <p>Loading</p>
      </div>) : (
        <div className={styles.movie}>
          <img className={styles.movie__img} src={movie.large_cover_image} />
          <div>
            <h2 className={styles.movie__title}>Title: {movie.title}</h2>
            <span className={styles.movie__description}>{movie.description_intro}</span>
            <div className={styles.movie__description}>
              <p>Rating : {movie.rating}</p>
              <p>Runtime : {movie.runtime} Min </p>
              <p>Genres</p>
              <ul>
                {movie.genres.map((el, idx) => <li key={idx}>{el}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
