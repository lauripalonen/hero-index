import React from 'react'
import { StyledTable } from './StyledTable'

interface IAttributeTableProps {
  attributes: {
    strength: string
    stamina: string
    intelligence: string
    speed: string
    agility: string
  }
}

const AttributeData = ({ attributes }) => {
  return (
    <tbody>
      <tr>
        <th>str</th>
        <td>{attributes.strength}</td>
        <th>sta</th>
        <td>{attributes.stamina}</td>
      </tr>
      <tr>
        <th>int</th>
        <td>{attributes.intelligence}</td>
        <th>spd</th>
        <td>{attributes.speed}</td>
      </tr>
      <tr>
        <th>agi</th>
        <td>{attributes.agility}</td>
      </tr>
    </tbody>
  )
}

export const AttributeTable: React.FC<IAttributeTableProps> = ({ attributes }) => (
  <StyledTable>
    <AttributeData attributes={attributes} />
  </StyledTable>
)