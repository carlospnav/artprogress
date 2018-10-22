import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 190px;
  background-color: red;
`
export const ConnectionLine = styled.div`
  height: 50px;
  flex: 1;
  margin-left: 50px;
  border-bottom: 1px solid blue;
  border-left: 1px solid blue;
  transform: translateX(25px) translateY(-20px);
`
export const Selector = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  transform: skew(-20deg) translateY(-20px);
  z-index: 2;
`
export const Image = styled.div`
  margin-left: 1px;
  width: 90px;
  background-color: yellow;
`

// export const Selector = styled.div`
//   position: absolute;
//   top: -20px;
//   right: -65px;
//   display: flex;
//   justify-content: flex-end;
//   width: 600px;
//   transform: skew(-20deg);
// `
// export const Image = styled.div`
//   height: 190px;
//   width: 90px;
//   background-color: yellow;
// `
