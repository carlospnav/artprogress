import React from 'react'

import { StyledWrapper } from './styles'
import Frame from './frame'
import TimeControls from './timeControls'
import ArtTypeControls from './artTypeControls'
import CallToAction from './ctA'

const CenterPiece = () => (
  <StyledWrapper>
    <TimeControls />
    <CallToAction />
    <Frame />
    <ArtTypeControls />
  </StyledWrapper>
)

export default CenterPiece
