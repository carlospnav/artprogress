import styled from 'styled-components'
import colors from '../../../../utils/colors'

export const StyledWrapper = styled.div`
  position: absolute;
  width: 1024px;
  height: 800px;
  top: 500px;
  left: -750px;
  display: flex;
  flex-direction: column;
  z-index: 0;
`
const rgbStripe = `
  ${colors.rgbs.bgStripe.r},
  ${colors.rgbs.bgStripe.g},
  ${colors.rgbs.bgStripe.b},
`
export const Stripe = styled.div`
  position: absolute;
  height: ${props => props.height}px;
  width: 900px;
  background: linear-gradient(
    to right, 
    rgba(
      ${rgbStripe}
      ${props => props.extra ? 1 : 0.9}
    ),
    ${props => props.extra && `
      rgba(
        ${rgbStripe}
        0.7
      ),
    `}
    rgba(
      ${rgbStripe}
      0
    )
  );
  transform:
    skewX(-30deg)
    rotate(-45deg)
    ${props => props.xOffset && `translateX(${props.xOffset}px)`}
    ${props => props.gap && `translateY(${props.gap}px)`}
  ;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.highlight ? 2 : 1}px;
    background: linear-gradient(to right, ${colors.solid.bgHighlight}, transparent);
  }
`
