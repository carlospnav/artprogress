import React, { Component } from 'react'
// import { init as firebaseInit } from '../../firebase'

import { AppContainer } from './styles'
import Progress from '../progress/container'

class App extends Component {
  // constructor (props) {
  //   super(props)
  //   // firebaseInit()
  // }

  render () {
    return (
      <AppContainer>
        <Progress />
      </AppContainer>
    )
  }
}

export default App
