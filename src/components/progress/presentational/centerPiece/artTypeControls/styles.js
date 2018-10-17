import styled from 'styled-components'
import colors from '../../../../../utils/colors'
import { MenuText } from '../../../../shared/texts'

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: -25px;
    border-top: 28px solid transparent;
    border-right: 35px solid ${colors.solid.bgRed};
  }
`
export const MenuBg = styled.div`
  position: absolute;
  content: '';
  left: 0;
  top: 2px;
  width: 35px;
  height: 100%;
  background: linear-gradient(to bottom, ${colors.solid.bgRed}, transparent);
  z-index: 0;
`
export const CategoriesWrapper = styled.div`
  margin: 0 20px;
  padding: 0 10px;
  border-left-width: 1px;
  border-left-style: solid;
  border-image:
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 25px,
        ${colors.solid.red} 25px,
        ${colors.solid.red} calc(100% - 25px),
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
  opacity: 0.7;

  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    top: 1px;
    left: -15px;
    border-radius: 50px;
    background-color: ${colors.solid.red};
    z-index: 3;
  }
`
