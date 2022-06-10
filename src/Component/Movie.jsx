import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Movie.module.css'

export default function Movie({ id, coverImage, title, summary, year, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImage} alt={title}></img>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>
            {title}
          </Link>

        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map(g => (<li key={g}>{g}</li>))}
        </ul>
      </div>
    </div >
  )
}


Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
}