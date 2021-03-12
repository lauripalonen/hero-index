import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BasicsTable } from '../Tables/BasicsTable'
import { AttributeTable } from '../Tables/AttributesTable'
import { SkillTable } from '../Tables/SkillsTable'

interface IHeroCardProps {
  name: string
  imgUrl: string
  description: string
  backStory: string
  attributes: {
    agility: number
    healthpoints: string
    intelligence: string
    mana: string
    resistance: string
    speed: number
    stamina: number
    strength: number
    weakness: string

  }
  skills: [{
    name: string
    damage: number
    element: string
  }]
  handleDisplayChange: (
    event: React.MouseEvent,
    display: string) => void
}

const pulse = keyframes`
  0% {box-shadow: 0px 0px 25px 5px #1c51f9}
  50% {box-shadow: 0px 0px 25px 10px #fc427b}
  100% {box-shadow: 0px 0px 25px 5px #1c51f9}
`

const HeroEntryContainer = styled.div`
  z-index: 10;
  position: fixed;
  margin: auto;
  display: inline-block;
  top: 5%;
  left: 0;
  right: 0;
  width: 80%;
  max-width: 500px;
  height: 90%;
  background-color: #1e145d;
  border-radius: 10px;
  font-family: Montserrat;
  color: white;
  overflow: auto;
  animation: ${pulse} 5s infinite
`

const Header = styled.h1`
  position: sticky;
  display: inline-block;
  top: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 10px 0 5px 0;
  background-color: #1e145d;
`

const ImageBlock = styled.div`
  margin: 5px auto 5px auto;
  width: 80%;
`

const ProfilePicture = styled.img`
  border-radius: 10px;
  width: 100%;
`

const TableBlock = styled.div`
  margin: 5px auto 5px auto;
  background-color: #372E6C;
  width: 80%;
  border-radius: 10px;
`

const Description = styled.div`
  margin: 15px auto 10px auto;
  width: 75%;
  font-style: italic;
`

const Footer = styled.div`
  position: sticky;
  display: inline-block;
  width: 100%;
  height: 50px;
  text-align: center;
  bottom: 0;
  background-color: #1e145d;
  padding: 5px 0 10px 0;
`

const Button = styled.button`
  border: 4px solid #001147;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  color: #001147;
  background-color: #fc427b;
  width: 150px;
  height: 50px;
  bottom: 0;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    background-color: #f63570;
  }
`

const Tables = ({ hp, mana, resistance, weakness, attributes, skills }) => {
  return (
    <div>
      <TableBlock>
        <BasicsTable hp={hp} mana={mana} resistance={resistance} weakness={weakness} />
      </TableBlock>
      <TableBlock>
        <AttributeTable attributes={attributes} />
      </TableBlock>
      <TableBlock>
        <SkillTable skills={skills} />
      </TableBlock>
    </div>
  )
}

export const HeroCard: React.FC<IHeroCardProps> = ({
  handleDisplayChange,
  name,
  imgUrl,
  attributes,
  skills,
  description }) => {

  const hp = attributes.healthpoints
  const mana = attributes.mana
  const resistance = attributes.resistance
  const weakness = attributes.weakness

  return (
    <HeroEntryContainer>
      <Header>{name}</Header>
      <ImageBlock>
        <ProfilePicture src={imgUrl} alt={`Profile picture of ${name}`}/>
      </ImageBlock>
      <Tables hp={hp}
        mana={mana}
        resistance={resistance}
        weakness={weakness}
        attributes={attributes}
        skills={skills}
      />
      <Description>
        {description}
      </Description>
      <Footer>
        <Button onClick={(e) => handleDisplayChange(e, '')}>close</Button>
      </Footer>
    </HeroEntryContainer >
  )
}