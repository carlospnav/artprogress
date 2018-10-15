import React from 'react'

import {
  StyledWrapper,
  CtaButton
} from './styles'
import { WhiteTitle as CtaText } from '../../../../shared/texts'

const CallToAction = () => (
  <StyledWrapper>
    <CtaButton>
      <CtaText>Compare</CtaText>
    </CtaButton>
  </StyledWrapper>
)

export default CallToAction
