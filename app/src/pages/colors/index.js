import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

const Colors = props => {
  return (
    <div>
      <h1>Colors</h1>
      {map(li, props.colors)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    colors: state.colors
  }
}

const connector = connect(mapStateToProps)

// class Colors extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { colors: [] }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5000/colors')
//       .then(res => res.json())
//       .then(colors => this.setState({ colors })) // really "({colors: colors})"  Or .then(apiColors => this.setState({colors: apiColors}))
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Colors</h1>
//         <ul>{map(li, this.state.colors)}</ul>
//       </div>
//     )
//   }
// }

export default connector(Colors)
