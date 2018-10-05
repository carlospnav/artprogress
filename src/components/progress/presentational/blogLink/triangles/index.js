import React from 'react'

import { Triangle } from './styles'

const Triangles = () => (
  <React.Fragment>
    <Triangle />
    <Triangle top={50} opacity={0.6} />
    <Triangle top={100} opacity={0.4} />
  </React.Fragment>
)

export default Triangles
