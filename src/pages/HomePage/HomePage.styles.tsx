import { Colors } from '@/constants/styles'
import styled from '@emotion/styled'
import BoltIcon from '@mui/icons-material/Bolt'

export const MainPageWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export const LightningBoltIcon = styled(BoltIcon)`
  font-size: 10em;
  margin-top: 10px;
  padding: 20px;
  border: 4px solid ${Colors.MidnightGreen};
  border-radius: 50%;
  fill: ${Colors.Gamboge};
  overflow: initial;
  cursor: pointer;
  transition: 400ms;
  opacity: 0.9;
  background: ${Colors.White};

  &:hover {
    transform: scale(2.5);
    opacity: 1;
  }
`
