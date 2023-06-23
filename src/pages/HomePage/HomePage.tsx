import { FC } from 'react'
import { Typography } from '@mui/material'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { Colors } from '@/constants/styles'
import { MainPageWrapper, LightningBoltIcon } from './HomePage.styles'
import { Link } from 'react-router-dom'

export const HomePage: FC = () => (
  <MainPageWrapper>
    <CenteredContent>
      <Typography variant="h4" fontWeight={800} color={[Colors.RichBlack]}>
        Memory Game
      </Typography>
      <Typography variant="subtitle1" fontWeight={600} color={Colors.Rufous}>
        KD & GK
      </Typography>

      <Link to="/game">
        <LightningBoltIcon></LightningBoltIcon>
      </Link>
    </CenteredContent>
  </MainPageWrapper>
)
