import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = char => {
  return <li key={char.id}>{char.name}</li>
}

const StarWars = props => {
  return (
    <div>
      <h1>Star Wars Character Names</h1>
      {map(li, props.starwars)}
    </div>
  )
}

const mapStateToProps = state => {
  console.log('...and the state is...', state)
  return {
    starwars: state.starWarsCharacters
  }
}

const connector = connect(mapStateToProps)
// class StarWars extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { chars: [] }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/starwars')
//       .then(res => res.json())
//       .then(chars => this.setState({ chars }))
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Star Wars Characters</h1>
//         <ul>{map(li, this.state.chars)}</ul>
//       </div>
//     )
//   }
// }

export default connector(StarWars)
