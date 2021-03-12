import * as React from 'react'
import styled from 'styled-components'
import { ThumbnailTable } from '../Tables/ThumbnailTable'

interface IThumbnailCardProps {
  name: string
  imgUrl: string
  description: string
  attributes: {
    healthpoints: string,
    mana: string,
    resistance: string,
    weakness: string
  }
  handleDisplayChange: (event: React.MouseEvent, display: string) => void
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px 5px 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

const ProfilePicture = styled.img`
  border-radius: 10px 10px 0px 0px;
  width: 100%;
`

const InfoContainer = styled.div`
  font-family: "Montserrat";
  color: white;
  height: 150px;
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  background-color: #1e145d;
  padding-bottom: 5px;
`

const Name = styled.h2`
  margin: 10px 0 5px 10px;
`

export const ThumbnailCard: React.FC<IThumbnailCardProps> = ({
  name,
  imgUrl,
  attributes,
  handleDisplayChange
}) => {
  return (
    <div onClick={(event) => handleDisplayChange(event, name)}>
      <CardContainer>
        <ProfilePicture src={imgUrl} alt={`Profile picture of ${name}`} />
        <InfoContainer>
          <Name>{name}</Name>
          <ThumbnailTable
            healthpoints={attributes.healthpoints}
            mana={attributes.mana}
            resistance={attributes.resistance}
            weakness={attributes.weakness}
          />
        </InfoContainer>
      </CardContainer>
    </div>
  )
}
