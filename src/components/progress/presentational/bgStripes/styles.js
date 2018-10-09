import styled from 'styled-components'
import colors from '../../../../utils/colors'

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 800px;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 0;
`
const rgbStripe = `
  ${colors.rgbs.bgStripe.r},
  ${colors.rgbs.bgStripe.g},
  ${colors.rgbs.bgStripe.b},
`
export const Stripe = styled.div.attrs({
})`
  position: absolute;
  top: ${props => props.yPos}px;
  height: ${props => props.height}px;
  width: 1024px;
  background: linear-gradient(
    to right, 
    rgba(
      ${rgbStripe}
      1
    ),
    rgba(
      ${rgbStripe}
      0.9
    ),
    rgba(
      ${rgbStripe}
      0
    )
  );
  transform:
    skewX(-30deg)
    rotate(-45deg)
    translateX(${props => props.xPos}px); 
`
