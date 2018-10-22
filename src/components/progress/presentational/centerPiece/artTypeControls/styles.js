import styled from 'styled-components'
import colors from '../../../../../utils/colors'
import { MenuText } from '../../../../shared/texts'

const redRGB = `
  ${colors.rgbs.red.r}, 
  ${colors.rgbs.red.g}, 
  ${colors.rgbs.red.b}
`
export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:after {
    position: absolute;
    content: '';
    left: 2px;
    top: -27px;
    border-top: 28px solid transparent;
    border-right: 35px solid ${colors.solid.bgRed};
  }
`
export const MenuBg = styled.div`
  position: absolute;
  content: '';
  left: 2px;
  top: 1px;
  width: 35px;
  height: 100%;
  background: linear-gradient(to bottom, ${colors.solid.bgRed}, transparent 70%);
  z-index: 0;
`
export const CategoriesWrapper = styled.div`
  margin: 20px;
  padding: 0 10px;
  border-left-width: 1px;
  border-left-style: solid;
  border-image:
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 25px,
        rgba(${redRGB}, 0.3) 25px,
        rgba(${redRGB}, 0.3) calc(100% - 25px),
        rgba(0, 0, 0, 0) calc(100% - 25px)
      ) 1 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`
export const Category = styled.div`
  
`
export const CategoryTitle = styled(MenuText)`
  position: relative;
  margin: 18px 0;
  padding-left: 15px;
  text-align: left;
  opacity: 0.8;

  &:before {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    top: 1px;
    left: -15px;
    border-radius: 50px;
    background-color: ${colors.solid.red};
  }
`
