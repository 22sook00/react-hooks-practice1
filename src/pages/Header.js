import React, { useState } from 'react'
import Modal from '../components/Modal'
import Toggle from '../components/Toggle'
import styled from 'styled-components'

const Headers = styled.header`
width : 100vw;
height : 20vh;
position : fixed;
padding : 30px;
position : relative;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
`
const Header = ({toggleClick}) => {
  return (
  <Headers id = 'headers'>
  <Modal />
  <Toggle toggleClick = {toggleClick}/>
  </Headers>
  )
}

export default Header;