import PlayerCard from './PlayerCard.js'
import { useState, useEffect } from 'react'

function PlayerList() {
  const [players, setPlayers] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/players")
      .then(response => response.json())
      .then(json => setPlayers(json))
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchInput.toLowerCase()))
    setPlayers(filteredPlayers)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" id="search" placeholder="search here" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <header className="App-header">
        {players.map(player => <PlayerCard player={player} />)}
      </header>
    </div>
  );
}

export default PlayerList;