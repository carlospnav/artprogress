import React, { Component } from 'react'
import { init as firebaseInit } from '../firebase'

import { AppContainer } from  './styles'

export default class App extends Component {
  constructor (props) {
    super(props)
    firebaseInit()
  }

  render() {
    return (
      <AppContainer>
      </AppContainer>
    );
  }
}