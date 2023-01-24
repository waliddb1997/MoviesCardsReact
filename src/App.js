
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
     <Navbar search={search} setSearch={setSearch}/>
     <MovieList search={search}/>
    </div>
  );
}

export default App;
