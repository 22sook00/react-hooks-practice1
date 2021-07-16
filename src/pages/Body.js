import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Bodies = styled.section`
display: flex;
justify-content: center;
align-items: center;
`
const LinkBtn = styled.button`
font-size: 16px;
padding : 5px 15px;
margin :5px;
border-radius: 10px;
border : none;
cursor: pointer;
&:hover{
  opacity: 0.7;
}
`
const Body = () => {
  return <Bodies id = 'bodies'>
    <Link to = '/'><LinkBtn>tag button</LinkBtn></Link>
    <Link to = '/tab'><LinkBtn>tap button</LinkBtn></Link>
    </Bodies>
}

export default Body;