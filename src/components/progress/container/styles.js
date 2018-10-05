import styled from 'styled-components'

import colors from '../../../utils/colors'

export const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  background: linear-gradient(
    to right, 
    ${colors.gradients.baseBackground[0]},
    ${colors.gradients.baseBackground[1]}
  );
`
