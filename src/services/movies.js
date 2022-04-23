const API_KEY = import.meta.env.VITE_API_KEY

const checkIsResponse = res => res.Response === 'True'

const searchMovies = ({ query }) => {
  return window.fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(response => {
      const resultsToStore = response.Response === 'True' ? response.Search : []
      return resultsToStore
    })
    .catch(err => console.error(err))
}

export { checkIsResponse, searchMovies }
