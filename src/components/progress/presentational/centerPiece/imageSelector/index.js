import React from 'react'

import {
  StyledWrapper,
  Selector,
  Image,
  ConnectionLine
} from './styles'

const ImageSelector = () => (
  <StyledWrapper>
    <ConnectionLine />
    <Selector>
      <Image />
      <Image />
      <Image />
    </Selector>
  </StyledWrapper>
)

export default ImageSelector
