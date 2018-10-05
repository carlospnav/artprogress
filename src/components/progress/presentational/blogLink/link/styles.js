import styled from 'styled-components'

import { WhiteText } from '../../../../shared/texts'

export const StyledWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

export const Text = styled(WhiteText)`
  margin-bottom: 10px;
`

export const VerticalLine = styled.div`
  height: 210px;
  width: 0;
  border-left: 1px solid white;
`
