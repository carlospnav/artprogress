import React from 'react'

import { StyledWrapper, Stripe } from './styles'

const BgStripes = () => {
  const height = 160

  return (
    <StyledWrapper>
      <Stripe height={height} />
      <Stripe height={height} gap={height + 3} xOffset={100} />
      <Stripe height={height} gap={height * 2 + 5} xOffset={200} />
      <Stripe height={height} gap={height * 3 + 7} xOffset={300} />
      <Stripe height={height} gap={height * 4 + 5} xOffset={320} extra />
      <Stripe height={height} gap={height * 5 + 6} xOffset={380} extra highlight/>
      <Stripe height={height} gap={height * 6 + 3} xOffset={200} extra />
      <Stripe height={height} gap={height * 7 + 5} xOffset={280} />
      <Stripe height={height} gap={height * 8 + 7} xOffset={100} />
    </StyledWrapper>
  )
}

export default BgStripes
