import styled, { css } from 'styled-components'

export const BaseText = css`
  margin: 0;
  font-family: Roboto;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
  color: white;
`

export const WhiteText = styled.p`
  ${BaseText}
  font-weight: 300;
  font-size: 15px;
`
export const MenuText = styled.p`
  ${BaseText}
  font-weight: 500;
  font-size: 9px;
`
export const WhiteTitle = styled.p`
  ${BaseText}
  font-weight: 900;
  font-style: italic;
  font-size: 48px;
`
