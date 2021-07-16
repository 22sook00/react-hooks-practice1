import React, { useState } from 'react'
import styled from 'styled-components'

const TapContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
>div{
  font-size: 20px;
  font-weight: 800;
  color : white;
  width : 50%;
  letter-spacing: 3px;
  height : 50px;
  background-color: mediumturquoise;
  border-radius: 6px;
  margin : 10px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
&:hover{
  opacity: 0.7;
  text-decoration: underline wavy; 
  }
}
>h3{
    font-size : 50px;
    text-transform: capitalize;
  }
`

const Tab = () => {

  const [tabText , setTabText] = useState('')
  const [divs, setDivs] = useState(['tab1','tab2','tab3'])

  const handleClickTap = (e) =>{
    setTabText(`나는 ${e} 을 눌렀다.`)
  }

  return <TapContainer>
    <h2>👇🏼 Tap something 👇🏼</h2>
    {divs.map((el,idx)=>{
      return <div key = {idx} onClick = {()=>handleClickTap(el)}>{el}</div>
    })}
    <h3>{tabText}</h3>
    </TapContainer>
}

export default Tab;