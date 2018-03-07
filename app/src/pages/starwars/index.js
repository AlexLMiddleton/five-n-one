import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = char => {
  return <li key={char.id}>{char.name}</li>
}

class StarWars extends React.Component {
  constructor(props) {
    super(props)
    this.state = { chars: [] }
  }
  componentDidMount() {
    fetch('http://localhost:5000/starwars')
      .then(res => res.json())
      .then(chars => this.setState({ chars }))
  }

  render() {
    return (
      <div>
        <h1>Star Wars Characters</h1>
        <ul>{map(li, this.state.chars)}</ul>
      </div>
    )
  }
}

export default StarWars
