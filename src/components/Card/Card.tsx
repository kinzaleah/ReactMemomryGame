import { LighningBoltIcon } from '@/pages/GamePage/GamePage.styles'
import { FC } from 'react'
import { CardBack, CardDiv, CardFront, CardInner, Emoji } from './Card.styles'

interface Props {
  selected?: boolean
  name: string
  image: string
  onSelect: () => void
}

export const Card: FC<Props> = (props: Props) => {
  const { selected, name, image, onSelect } = props

  return (
    <CardDiv onClick={onSelect}>
      <CardInner className={selected ? 'flipped' : ''}>
        <CardFront>
          <LighningBoltIcon />
        </CardFront>
        <CardBack>
          <Emoji>{image}</Emoji>
        </CardBack>
      </CardInner>
    </CardDiv>
  )
}
