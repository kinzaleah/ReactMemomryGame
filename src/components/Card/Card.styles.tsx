import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CardDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  perspective: 1000px;
  transition: 400ms;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &.flipped {
    transform: rotateY(180deg);
  }
`
const CardFaceStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #65ab9f;
  padding: 20px;
  box-shadow: 5px 5px 5px grey;
  transition: 400ms;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`

export const CardFront = styled.div`
  ${CardFaceStyles}
  background: aquamarine;
`

export const CardBack = styled.div`
  ${CardFaceStyles}
  transform: rotateY(180deg);
  background: #34e1eb;
  border: 2px solid #2b4f48;
`

export const Container = styled.div`
  height: 80%;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 30px;
`

export const Emoji = styled.span`
  font-size: 48px;
  transition: 400ms;
  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`
