function App() {

  const movies = [
    { title: 'Inception', watched: true },
    { title: 'The Matrix', watched: true },
    { title: 'Interstellar', watched: false },
    { title: 'The Prestige', watched: true },
    { title: 'Memento', watched: false }
];


  return (
    <>
      <h1>List Of Movies</h1>
      <ul>
        {movies.map((movie,index) => 
          <li key={index} className={movie.watched? 'watched' : 'not-watched'}>{movie.title}</li>
        )}
      </ul>
    </>
  )
}

export default App
