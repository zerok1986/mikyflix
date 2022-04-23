import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'
import './App.css'
import { Movies } from './Movies'

function App () {
  const inputRef = useRef()
  const [results, setResults] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { value } = inputRef.current
    const resultsToStore = await searchMovies({ query: value })
    setResults(resultsToStore)
  }

  return (
    <>
      <h1 className='title'>MikyFlix</h1>
      <form data-testid='form' className='search' onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className='search-input'
          type='text'
          name='movie'
          placeholder='Buscar pelicula...'
        />
        <button className='search-submit'>Buscar</button>
      </form>

      <Movies results={results} />
    </>
  )
}

export default App
