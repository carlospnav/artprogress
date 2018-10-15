import React from 'react'

import { StyledWrapper } from './styles'
import Frame from './frame'
import TimeControls from './timeControls'
import ArtTypeControls from './artTypeControls'

const CenterPiece = () => (
  <StyledWrapper>
    <TimeControls />
    <Frame />
    <ArtTypeControls />
  </StyledWrapper>
)

export default CenterPiece
