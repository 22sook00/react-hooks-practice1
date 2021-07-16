import React, { useState } from 'react'
import styled from 'styled-components'

const LightToggleOut = styled.div`

width : 80px;
height : 30px;
border-radius: 20px;
padding : 5px;
background-color: mediumturquoise;
&.dark-toggle-out{
  transition: 0.4s;
  background-color: mintcream;
}
`
const LightToggleIn = styled.div`
width : 28px;
height : 28px;
margin : 1px;
border-radius: 50%;
background-color: white;
cursor: pointer;
position: absolute;
transition: 0.4s;
&.dark-toggle-in{
  right : 40px;
  transition : 0.4s;
  background-color: darkslateblue;
}
`
const Toggle = () => {
  
  const [isDark, setIsDark] = useState(false);
  const toggleClick = () =>{
    setIsDark(!isDark)
  }
  

  return (
    <>
    <LightToggleOut className = {!isDark ?'light-toggle-out' :  'light-toggle-out dark-toggle-out'} >
    <LightToggleIn className = {!isDark ?'light-toggle-in' :  'light-toggle-in dark-toggle-in'} onClick = {toggleClick}/>
    </LightToggleOut>
    </>
    )
}

export default Toggle;