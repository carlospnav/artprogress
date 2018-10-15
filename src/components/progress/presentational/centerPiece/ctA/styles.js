import styled from 'styled-components'
import colors from '../../../../../utils/colors'

export const StyledWrapper = styled.div`
  top: -65px;
  right: 80px;
  position: absolute;
`
export const CtaButton = styled.button`
  background: none;
  border: none;
  padding: 0;

  &:after {
    content: '';
    position: absolute;
    top: 48px;
    right: -56px;
    width: 80px;
    height: 40px;
    background: linear-gradient(to right, ${colors.solid.bgRed}, transparent);
    transform: skewY(-38deg);
  }
`
