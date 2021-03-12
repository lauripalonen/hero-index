import React from 'react'
import styled from 'styled-components'

export const StyledTable = styled.table`
  background-color: #372E6C;
  padding: 10px 10px 5px 10px;
  border-radius: 10px;
  text-align: left;
  width: 100%;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`