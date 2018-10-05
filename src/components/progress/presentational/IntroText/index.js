import React from 'react'

import { StyledWrapper, Title, Text } from './styles'

const IntroText = () => {
  return (
    <StyledWrapper>
      <Title>
        This is an art progress comparison website.
      </Title>
      <Text>
        I created this website to practice new technologies and to show a little
        bit of my art progress over the years. Use the controls on the image to set
        the timeline for the comparison and the type / category of images you would
        like to see.
      </Text>
    </StyledWrapper>
  )
}

export default IntroText
