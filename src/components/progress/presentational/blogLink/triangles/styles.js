import styled from 'styled-components'
import PropTypes from 'prop-types'

import colors from '../../../../../utils/colors'

export const Triangle = styled.div`
  position: absolute;
  top: ${props => `${props.top}px` || 0};
  opacity:  ${props => props.opacity || 1};
  left: 0;
  width: 0; 
  height: 0;
  border-left: 205px solid transparent;
  border-right: 205px solid transparent;
  border-top: 205px solid ${colors.solid.red};
`

Triangle.propTypes = {
  top: PropTypes.number,
  opacity: function (props, propName) {
    let opacity = props[propName]
    const NotANumber = isNaN(opacity)
    const OutOfBounds = !(opacity >= 0 && opacity < 1)

    if (NotANumber && OutOfBounds) return new Error('Opacity must be a number between 0 and 0.9.')
  }
}

Triangle.defaultProps = {
  top: 0,
  opacity: 1
}
