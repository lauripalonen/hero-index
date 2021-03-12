import * as React from 'react'
import styled from 'styled-components'

interface IThumbnailTableProps {
  healthpoints: string,
  mana: string,
  resistance: string,
  weakness: string
}

const Table = styled.table`
  padding-left: 10px;
  text-align: left;
`
const Category = styled.td`
  padding: 0 10px;
  font-weight: 700;
`

const Data = styled.td`
  padding: 0 0 10px 10px;
  font-weight: 500;
  `

export const ThumbnailTable: React.FC<IThumbnailTableProps> = ({
  healthpoints, mana, resistance, weakness
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <Category>HP</Category>
          <Category>Resistance</Category>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Data>{healthpoints}</Data>
          <Data>{resistance}</Data>
        </tr>
      </tbody>
      <thead>
        <tr>
          <Category>Mana</Category>
          <Category>Weakness</Category>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Data>{mana}</Data>
          <Data>{weakness}</Data>
        </tr>
      </tbody>
    </Table>
  )
}