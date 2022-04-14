export type pokemonTypes =
  | 'normal'
  | 'fight'
  | 'fly'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'

export type moveColorsType = {
  [type in pokemonTypes]: string
}

export type Slot = {
  cardInformation?: {
    moveType: pokemonTypes
    moveName: string
  }
  gameState?: 'correct' | 'wrong' | 'wrong-move' | 'not-checked'
}

export type BoardData = {
  1: Slot[]
  2: Slot[]
  3: Slot[]
  4: Slot[]
  5: Slot[]
}
