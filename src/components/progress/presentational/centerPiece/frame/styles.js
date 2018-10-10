import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  width: 760px;
  height: 513px;
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
  filter: saturate(0);
  object-fit: cover;
  flex: 1;
  z-index: 0;
`
export const ImageSelectors = styled.div`
  position: absolute;
  width: 550px;
  height: 473px;
  flex: 1;
  display: flex;
  background-color: white;
  transform: skew(-20deg);
  z-index: 1;
  box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.3);
`
export const Selector = styled.div`
  flex: 1;
  border-left: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  transform: skew(0);

  &:last-of-type {
    border-right: 1px solid white;
  }
  z-index: 3;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 720px;
    height: 473px;
    top: 0;
    left: -360px;
    z-index: 2;
    background: url(${props => props.bg});
    background-size: cover;
    transform: skew(20deg);
    opacity: ${props => props.opacity || 1};
  }
`
