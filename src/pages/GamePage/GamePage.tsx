import { FC } from 'react'
import { Typography } from '@mui/material'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { Colors } from '@/constants/styles'
import { GamePageWrapper } from './GamePage.styles'

export const GamePage: FC = () => (
  <GamePageWrapper>
    <CenteredContent>
      <Typography variant="h4" fontWeight={800} color={[Colors.RichBlack]}>
        Game Page
      </Typography>
      <Typography variant="subtitle1" fontWeight={600} color={Colors.Rufous}>
        Cards will go here
      </Typography>
    </CenteredContent>
  </GamePageWrapper>
)
