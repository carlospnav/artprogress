import React, { Component } from 'react'

import { AppContainer } from './styles'
import Progress from '../progress/container'

class App extends Component {
  render () {
    return (
      <AppContainer>
        <Progress />
      </AppContainer>
    )
  }
}

export default App
