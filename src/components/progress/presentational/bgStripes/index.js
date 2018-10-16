import React from 'react'

import { StyledWrapper, Stripe } from './styles'

// const stripes = [...Array(9).keys()]

const BgStripes = () => {
  const height = 160
  // let decreaser = 0

  return (
    <StyledWrapper>
      <Stripe height={height} />
      <Stripe height={height} gap={height + 3} xOffset={100} />
      <Stripe height={height} gap={height * 2 + 5} xOffset={200} />
      <Stripe height={height} gap={height * 3 + 7} xOffset={300} />
      <Stripe height={height} gap={height * 4 + 5} xOffset={320} extra />
      <Stripe height={height} gap={height * 5 + 6} xOffset={380} extra />
      <Stripe height={height} gap={height * 6 + 3} xOffset={200} extra />
      <Stripe height={height} gap={height * 7 + 5} xOffset={280} />
      <Stripe height={height} gap={height * 8 + 7} xOffset={100} />
      {/* <Stripe height={height} gap={height * 2 + 4} xOffset={250} />
      <Stripe height={height} gap={height * 3 + 5} xOffset={300} />
      <Stripe height={height} gap={height * 4 + 6} xOffset={350} />
      <Stripe height={height} gap={height * 5} xOffset={300} /> */}
      {/* {stripes.map((item, index) => {
        let yMultiplier
        let xMultiplier

        if (index > 5) decreaser += 150

        yMultiplier = (height * index) - (index * 18)
        xMultiplier = ((index * 100) - 800) - decreaser
        return (
          <Stripe
            key={`stripe${index}`}
            height={height}
            yPos={yMultiplier}
            xPos={xMultiplier}
          />
        )
      })} */}
    </StyledWrapper>
  )
}

export default BgStripes
