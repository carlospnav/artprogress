import styled from 'styled-components'

import colors from '../../../../../utils/colors'
import { MenuText } from '../../../../shared/texts'

const rgbBlueControls = `
  ${colors.rgbs.timeControlsBlue.r},
  ${colors.rgbs.timeControlsBlue.g},
  ${colors.rgbs.timeControlsBlue.b},
`
export const StyledWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  height: 40px;
  background: linear-gradient(
    to right, 
    rgba(
      ${rgbBlueControls}
      0
    ),
    rgba(
      ${rgbBlueControls}
      1
    )
  );
  display: flex;
  justify-content: space-between;
`
export const HorizontalStripe = styled.div`
  position: absolute;
  content: "";
  height: 1px;
  top: 0;
  left: 0;
  margin: 0 10px;
  width: calc(100% - 20px);
  background-color: ${colors.solid.blueBorder};
  display: flex;
  justify-content: space-between;

  &:before {
    position: absolute;
    content: '';
    border-top: 1px solid ${colors.solid.blueBorder};
    width: 60px;
    top: 0;
    right: -60px;
  }

  &:after {
    position: absolute;
    content: '';
    top: 1px;
    right: -60px;
    border-bottom: 40px solid transparent;
    border-left: 50px solid rgb(
      ${colors.rgbs.timeControlsBlue.r},
      ${colors.rgbs.timeControlsBlue.g},
      ${colors.rgbs.timeControlsBlue.b}
    );
  }
`
export const VerticalStripe = styled.div`
  position: relative;
  height: 7px;
  width: 1px;
  background-color: ${colors.solid.blueBorder};
`
export const MonthText = styled(MenuText)`
  position: relative;
  opacity: 0.7;
  margin: 15px 0;

  &:hover {
    color: white;
    cursor: pointer;
  }
`
