import styled from 'styled-components'
import colors from '../../../../../utils/colors'

export const StyledWrapper = styled.div`
  position: relative;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 2px;
    width: 35px;
    height: 100%;
    background: linear-gradient(to bottom, ${colors.solid.bgRed}, transparent);
  }

  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: -25px;
    border-top: 28px solid transparent;
    border-right: 35px solid ${colors.solid.bgRed};
  }
`
