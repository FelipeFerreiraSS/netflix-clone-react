/* eslint-disable import/no-anonymous-default-export */
import { apiKey, apiBase } from './lib/chave'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${apiBase}${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`)
      },
    ]
  }
}