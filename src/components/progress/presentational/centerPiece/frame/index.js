import React from 'react'
import PropTypes from 'prop-types'

import {
  CurrentImage,
  StyledWrapper,
  ImagesContainer
} from './styles'

const Frame = ({ imageUrl }) => (
  <StyledWrapper>
    <ImagesContainer>
      <CurrentImage
        src={imageUrl}
        alt='Current art being displayed'
      />
    </ImagesContainer>
  </StyledWrapper>
)

Frame.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default Frame
