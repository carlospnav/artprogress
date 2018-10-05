import styled from 'styled-components'

import { WhiteText, BaseText } from '../../../shared/texts'

export const StyledWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 0;
`

export const Title = styled.h1`
  ${BaseText}
  width: 800px;
  font-weight: 900;
  font-size: 72px;
  font-style: italic;
`

export const Text = styled(WhiteText)`
  margin-top: 20px;
  width: 500px;
`
