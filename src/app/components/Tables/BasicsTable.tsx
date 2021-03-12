import React from 'react'
import styled from 'styled-components'
import { StyledTable } from './StyledTable'

interface IBasicsTableProps {
  hp: string,
  mana: string,
  resistance: string,
  weakness: string
}

const Cell = styled.td`
  padding: 0px 0 5px 0;
`

const BasicsData = ({ hp, mana, resistance, weakness }) => {
  return (
    <tbody>
      <tr>
        <th>Hp</th>
        <th>Resistance</th>
      </tr>
      <tr>
        <Cell>{hp}</Cell>
        <Cell>{resistance}</Cell>
      </tr>
      <tr>
        <th>Mana</th>
        <th>Weakness</th>
      </tr>
      <tr>
        <Cell>{mana}</Cell>
        <Cell>{weakness}</Cell>
      </tr>
    </tbody>
  )
}

export const BasicsTable: React.FC<IBasicsTableProps> = ({ hp, mana, resistance, weakness }) => (
  <StyledTable>
    <BasicsData hp={hp} mana={mana} resistance={resistance} weakness={weakness} />
  </StyledTable>
)

