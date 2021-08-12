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
            <div className="feature--name">{item.original_name}</div>
            <div className="feature--info">
              <div className="feature--pointer">{item.vote_average}pontos</div>
              <div className="feature--year">2099</div>
              <div className="feature--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
            </div>
            <div className="feature--description">{item.overview}</div>
            <div className="feature--button">

            </div>
            <div className="feature--genres"><strong>Gêneros:...</strong></div>
          </div>
        </div>
      </section>
    </div>
  )
}