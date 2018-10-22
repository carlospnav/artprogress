import React from 'react'

import { StyledWrapper } from './styles'
import Frame from './frame'
import TimeControls from './timeControls'
import ArtTypeControls from './artTypeControls'
import CallToAction from './ctA'
import ImageSelector from './imageSelector'

const CenterPiece = () => (
  <StyledWrapper>
    <TimeControls />
    <CallToAction />
    <Frame imageUrl='http://www.lngstudios.com/wp-content/uploads/2015/02/Gardenian_House_HD_for_we1l.jpg'/>
    <ArtTypeControls />
    <ImageSelector />
  </StyledWrapper>
)

export default CenterPiece
