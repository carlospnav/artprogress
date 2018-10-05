import styled, { css } from 'styled-components'

export const StyledWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 0;
`

const BaseText = css`
  margin: 0;
  font-family: Roboto;
  text-align: center;
  color: white;
`

export const Title = styled.h1`
  ${BaseText}
  width: 800px;
  font-weight: 900;
  font-size: 72px;
  font-style: italic;
`

export const Text = styled.p`
  ${BaseText}
  margin-top: 20px;
  width: 500px;
  font-weight: 300;
  font-size: 15px;
`
