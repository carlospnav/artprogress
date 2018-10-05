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
