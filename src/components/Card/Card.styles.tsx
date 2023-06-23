import { Colors } from '@/constants/styles'
import styled from '@emotion/styled'

export const CardDiv = styled.div`
  height: 100%;
  width: 100%;
  background: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  height: 80%;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;
`
