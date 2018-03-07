import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = fortune => {
  return <li key={fortune.id}>{fortune.value}</li>
}

class FortuneCookies extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fortune: [] }
  }
  componentDidMount() {
    fetch('http://localhost:5000/fortune-cookies')
      .then(res => res.json())
      .then(fortune => this.setState({ fortune }))
  }

  render() {
    return (
      <div>
        <h1>Fortune Cookies</h1>
        <ul>{map(li, this.state.fortune)}</ul>
      </div>
    )
  }
}

export default FortuneCookies
