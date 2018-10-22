import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  grid-column: 1 / 1;
  padding: 20px;
  background-color: white;
`
export const ImagesContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
`
export const CurrentImage = styled.img`
  // filter: saturate(0);
  object-fit: contain;
  flex: 1;
  z-index: 0;
`
