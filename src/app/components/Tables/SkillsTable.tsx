import React from 'react'
import styled from 'styled-components'
import { StyledTable } from './StyledTable'


interface ISkillTableProps {
  skills: [
    {
      name: string,
      damage: string,
      element: string
    }
  ]
}

const SkillRow = styled.tr`
  vertical-align: top;
`

const Cell = styled.td`
  padding: 0px 0 5px 0;
`

const SkillsData = ({ skills }) => {
  const skillItems = skills.map(skill => {
    return (
      <SkillRow key={skill.name}>
        <Cell>{skill.name.toLowerCase()}</Cell>
        <Cell>{skill.damage}</Cell>
        <Cell>{skill.element.toLowerCase()}</Cell>
      </SkillRow>
    )
  })
  return (
    <tbody>
      <tr>
        <th>skill</th>
        <th>dmg</th>
        <th>type</th>
      </tr>
      {skillItems}
    </tbody>)
}

export const SkillTable: React.FC<ISkillTableProps> = ({ skills }) => (
  <StyledTable>
    <SkillsData skills={skills} />
  </StyledTable>
)