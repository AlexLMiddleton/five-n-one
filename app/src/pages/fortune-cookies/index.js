import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = fortune => {
  return <li key={fortune.id}>{fortune.value}</li>
}

const FortuneCookies = props => {
  return (
    <div>
      <h1>Fortune Cookies</h1>
      {map(li, props.fortune)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    fortune: state.fortuneCookies
  }
}

const connector = connect(mapStateToProps)

export default connector(FortuneCookies)
