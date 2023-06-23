import { FC } from 'react'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { GamePageWrapper } from './GamePage.styles'
import { Card } from '@/components/Card/Card'
import { Container } from '@/components/Card/Card.styles'

export const GamePage: FC = () => {
  const cardIcons = [
    { index: '1', name: 'koala', picture: '' },
    { index: '2', name: 'koala', picture: '' },
    { index: '3', name: 'lion', picture: '' },
    { index: '4', name: 'lion', picture: '' },
    { index: '5', name: 'tiger', picture: '' },
    { index: '6', name: 'tiger', picture: '' },
    { index: '7', name: 'shark', picture: '' },
    { index: '8', name: 'shark', picture: '' },
    { index: '9', name: 'elephant', picture: '' },
    { index: '10', name: 'elephant', picture: '' },
    { index: '11', name: 'unicorn', picture: '' },
    { index: '12', name: 'unicorn', picture: '' },
    { index: '13', name: 'chicken', picture: '' },
    { index: '14', name: 'chicken', picture: '' },
    { index: '15', name: 'dog', picture: '' },
    { index: '16', name: 'dog', picture: '' },
  ]

  const shuffleIcons = (array: { index: string; name: string; picture: string }[]) => {
    return array.sort(() => Math.random() - 0.5)
  }

  const shuffledCardIcons = shuffleIcons(cardIcons)

  // push selected item into this array
  // const selectedCards = []

  return (
    <GamePageWrapper>
      <CenteredContent>
        <Container>
          {shuffledCardIcons.map((icon, index) => (
            <Card selected key={index} icon={icon.name}></Card>
          ))}
        </Container>
      </CenteredContent>
    </GamePageWrapper>
  )
}
