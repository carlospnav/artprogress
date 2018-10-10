import styled from 'styled-components'

import colors from '../../../../../utils/colors'

const rgbBlueControls = `
  ${colors.rgbs.timeControlsBlue.r},
  ${colors.rgbs.timeControlsBlue.g},
  ${colors.rgbs.timeControlsBlue.b},
`
export const StyledWrapper = styled.div`
  position: relative;
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

  &:before {
    position: absolute;
    content: "";
    height: 1px;
    top: 0;
    left: 0;
    margin: 0 20px;
    width: calc(100% - 40px);
    background-color: ${colors.solid.blueBorder};
  }
`
export const MonthControl = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
export const MonthVerticalStripe = styled.div`
  position: absolute;
  height: 7px;
  width: 1px;
  background-color: ${colors.solid.blueBorder};
`
export const MonthText = styled.p`
  position: relative;
  margin: 15px 0;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 600;
  color: ${colors.solid.month};
`
