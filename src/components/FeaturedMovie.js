/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './FeaturedMovie.css'

export default ({item}) => {

  let firstDate = new Date(item.first_air_date)
  let genres = []
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }

  return(
    <div>
      <section className="feature" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}>
        <div className="feature--vertical">
          <div className="feature--horizontal">
            <div className="feature--name">{item.original_name}</div>
            <div className="feature--info">
              <div className="feature--pointer">{item.vote_average}pontos</div>
              <div className="feature--year">{firstDate.getFullYear()}</div>
              <div className="feature--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
            </div>
            <div className="feature--description">{item.overview}</div>
            <div className="feature--button">
              <a href={`/watch/${item.id}`} className="feature--watchbutton">▶ Assistir</a>
              <a href={`/list/add/${item.id}`} className="feature--mylistbutton">+ Minha lista</a>
            </div>
            <div className="feature--genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
          </div>
        </div>
      </section>
    </div>
  )
}