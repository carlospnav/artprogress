import React from 'react'

import Stripe from './stripe'
import { StyledWrapper } from './styles'

// const stripes = [...Array(5).keys()]

const BgStripes = () => (
  <StyledWrapper>
    {/* {stripes.map((stripe, index) => (
      <Stripe  />
    ))} */}
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
    <Stripe />
  </StyledWrapper>
)

export default BgStripes
