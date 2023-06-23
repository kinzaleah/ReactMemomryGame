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

  const shuffleIcons = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5)
  }

  const shuffledCardIcons = shuffleIcons(cardIcons)

  return (
    <GamePageWrapper>
      <CenteredContent>
        <Container>
          {shuffledCardIcons.map((icon, index) => (
            <Card selected key={index} icon={icon}></Card>
          ))}
        </Container>
      </CenteredContent>
    </GamePageWrapper>
  )
}
