import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = buzzword => {
  return <li key={buzzword.id}>{buzzword.value}</li>
}
const Buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    buzzwords: state.buzzwords
  }
}

const connector = connect(mapStateToProps)

export default connector(Buzzwords)
