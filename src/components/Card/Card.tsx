import { LighningBoltIcon } from '@/pages/GamePage/GamePage.styles'
import { FC } from 'react'
import { CardDiv } from './Card.styles'

interface Props {
  selected?: boolean
  icon: string
}

export const Card: FC<Props> = (props: Props) => {
  const { selected, icon } = props

  return <CardDiv>{selected ? icon : <LighningBoltIcon />}</CardDiv>
}
