import React from 'react'

import { StyledWrapper } from './styles'
import Frame from './frame'
import TimeControls from './timeControls'

const CenterPiece = () => (
  <StyledWrapper>
    <TimeControls />
    <Frame />
  </StyledWrapper>
)

export default CenterPiece
