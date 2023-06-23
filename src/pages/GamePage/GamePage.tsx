import { FC, useMemo, useState, useLayoutEffect } from 'react'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { GamePageWrapper } from './GamePage.styles'
import { Card } from '@/components/Card/Card'
import { Container } from '@/components/Card/Card.styles'

export const GamePage: FC = () => {
  const cardIcons = useMemo(
    () => [
      {
        index: '1',
        name: 'koala',
        image: '🐨',
      },
      { index: '2', name: 'koala', image: '🐨' },
      { index: '3', name: 'lion', image: '🦁' },
      { index: '4', name: 'lion', image: '🦁' },
      { index: '5', name: 'tiger', image: '🐯' },
      { index: '6', name: 'tiger', image: '🐯' },
      { index: '7', name: 'shark', image: '🦈' },
      { index: '8', name: 'shark', image: '🦈' },
      { index: '9', name: 'elephant', image: '🐘' },
      { index: '10', name: 'elephant', image: '🐘' },
      { index: '11', name: 'unicorn', image: '🦄' },
      { index: '12', name: 'unicorn', image: '🦄' },
      { index: '13', name: 'chicken', image: '🐔' },
      { index: '14', name: 'chicken', image: '🐔' },
      { index: '15', name: 'dog', image: '🐶' },
      { index: '16', name: 'dog', image: '🐶' },
    ],
    []
  )

  const [selectedCards, setSelectedCards] = useState<
    { index: string; name: string; image: string }[]
  >([])
  const [correctPairs, setCorrectPairs] = useState<
    { index: string; name: string; image: string }[]
  >([])
  const faceUpCards = [...correctPairs, ...selectedCards]
  const shuffleIcons = (array: { index: string; name: string; image: string }[]) => {
    return array.sort(() => Math.random() - 0.5)
  }

  //const shuffledCardIcons = useMemo(() => cardIcons.slice(0, 2), [])
  const shuffledCardIcons = useMemo(() => shuffleIcons(cardIcons), [])
  const isGameFinished = correctPairs.length === shuffledCardIcons.length
  const handleSelectedCardItem = (item: {
    index: string
    name: string
    image: string
  }) => {
    if (selectedCards.length === 2) return
    setSelectedCards([...selectedCards, item])
  }

  const checkIfSelected = (item: { index: string; name: string; image: string }) => {
    return faceUpCards.includes(item)
  }
  const handleCorrectPair = async () => {
    setCorrectPairs([...correctPairs, ...selectedCards])
    // show feedabck for successful
    await wait(500)
    setSelectedCards([])
    alert('Hurray! you have got a match')
  }
  const handleError = async () => {
    await wait(500)
    // show feedback for error
    alert('Oh no!, better luck next time')
    setSelectedCards([])
  }
  useLayoutEffect(() => {
    if (selectedCards.length == 2) {
      if (selectedCards[0].name == selectedCards[1].name) {
        handleCorrectPair()
      } else {
        handleError()
      }
    }
  }, [selectedCards])

  useLayoutEffect(() => {
    if (correctPairs.length > 0 && isGameFinished) {
      wait(700)
      alert('you win!!')
    }
  }, [isGameFinished])
  return (
    <GamePageWrapper>
      <CenteredContent>
        <Container>
          {shuffledCardIcons.map((icon, index) => (
            <Card
              onSelect={() => handleSelectedCardItem(icon)}
              selected={checkIfSelected(icon)}
              key={index}
              name={icon.name}
              image={icon.image}
            ></Card>
          ))}
        </Container>
      </CenteredContent>
    </GamePageWrapper>
  )
}
const wait = (time: number) =>
  new Promise((res) => {
    const timer = setTimeout(() => {
      res(undefined)
      clearTimeout(timer)
    }, time)
  })
