import React from 'react'

import { StyledWrapper, Stripe } from './styles'

const stripes = [...Array(9).keys()]

const BgStripes = () => {
  const height = 125
  let decreaser = 0

  return (
    <StyledWrapper>
      {stripes.map((item, index) => {
        let yMultiplier
        let xMultiplier

        if (index > 5) decreaser += 150

        yMultiplier = (height * index) - (index * 15)
        xMultiplier = ((index * 100) - 900) - decreaser
        return (
          <Stripe
            key={`stripe${index}`}
            height={height}
            yPos={yMultiplier}
            xPos={xMultiplier}
          />
        )
      })}
    </StyledWrapper>
  )
}

export default BgStripes
