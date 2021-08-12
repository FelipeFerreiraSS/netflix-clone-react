/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './FeaturedMovie.css'

export default ({item}) => {
  return(
    <div>
      <section className="feature" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}>
        <div className="feature--vertical">
          <div className="feature--horizontal">

          </div>
        </div>
      </section>
    </div>
  )
}