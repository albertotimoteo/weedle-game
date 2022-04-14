import styled from 'styled-components'
import { moveColorsType, pokemonTypes } from '../../types'

const moveColors: moveColorsType = {
  normal: '#a8a878',
  fight: '#c03028',
  fly: '#a890f0',
  poison: '#a040a0',
  ground: '#e0c068',
  rock: '#b8a038',
  bug: '#a8b820',
  ghost: '#705898',
  steel: '#b8b8d0',
  fire: '#f08030',
  water: '#6890f0',
  grass: '#78c850',
  electric: '#f8d030',
  psychic: '#f85888',
  ice: '#98d8d8',
}

export const Card = styled.div<{ moveType: pokemonTypes }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  font-size: 16px;
  background: ${({ moveType }) => moveColors[moveType]};
  border-radius: 10px;
`
