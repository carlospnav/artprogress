import styled from 'styled-components'

import colors from '../../../utils/colors'

export const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to right, 
    ${colors.gradients.baseBackground[0]},
    ${colors.gradients.baseBackground[1]}
  );
`
