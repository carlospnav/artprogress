import styled from 'styled-components'
import colors from '../../../../../utils/colors'
import { WhiteTitle } from '../../../../shared/texts'

export const StyledWrapper = styled.div`
  top: -65px;
  right: 80px;
  position: absolute;
`
export const CtaButton = styled.button`
  background: none;
  border: none;
  padding: 0;

  &:before {
    content: '';
    position: absolute;
    top: 14px;
    left: 16px;
    width: 200px;
    height: 50px;
    background: linear-gradient(to top right, ${colors.solid.ctaHighlight},
      transparent
    );
    transform: skew(-58deg);
    z-index: -1;
  }

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
export const CtaText = styled(WhiteTitle)``
