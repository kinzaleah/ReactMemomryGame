import { FC } from 'react'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { GamePageWrapper } from './GamePage.styles'
import { Card } from '@/components/Card/Card'
import { Container } from '@/components/Card/Card.styles'

export const GamePage: FC = () => {
  const cardIcons = [
    'koala',
    'koala',
    'lion',
    'lion',
    'tiger',
    'tiger',
    'shark',
    'shark',
    'elephant',
    'elephant',
    'unicorn',
    'unicorn',
    'chicken',
    'chicken',
    'dog',
    'dog',
  ]

  return (
    <GamePageWrapper>
      <CenteredContent>
        <Container>
          {cardIcons.map((icon, index) => (
            <Card selected key={index} icon={icon}></Card>
          ))}
        </Container>
      </CenteredContent>
    </GamePageWrapper>
  )
}
