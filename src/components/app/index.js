import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { init as firebaseInit } from '../../firebase'

import { AppContainer } from './styles'

class App extends Component {
  constructor (props) {
    super(props)
    firebaseInit()
  }

  render () {
    return (
      <AppContainer>
        { this.props.artPieces && this.props.artPieces.map(piece => (
          <p key={piece.name}>{piece.name}</p>
        ))}
      </AppContainer>
    )
  }
}

App.propTypes = {
  artPieces: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
}

function mapStateToProps (state, ownProps) {
  return { ...state }
}

export default connect(mapStateToProps)(App)
