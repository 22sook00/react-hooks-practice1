import React, { useState, useRef,useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

//keyFrames
const movingBtn = keyframes`
0%{ transform : rotate(-10deg)}
50%{ transform : rotate(35deg)}
100%{ transform : rotate(80deg)}
`
const TagContainer = styled.div`
  background : linear-gradient(45deg,mediumturquoise,#5d9cec);
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  padding: 10px 15px;
  border-radius: 6px;
  >h1{
    margin : 0;
  }
  >ul{
    padding : 0;
  >li{
    list-style: none;
    display: inline-block;
    border-radius: 6px;
    background-color: whitesmoke;
    margin : 5px;
    padding : 5px;
    cursor:pointer;
    &:hover{
      opacity:0.7;
    }
    >button{
      border-radius: 50%;
      border : none;
      background-color: mediumturquoise;
      cursor:pointer;
      &:hover{
        animation : ${movingBtn} 400ms 0s infinite linear alternate-reverse; 
      }
    }
  }
  }
  >input {
    font-size: 20px;
    width : 100%;
    border-radius: 6px;
    border: none;
    padding : 5px;
    box-sizing: border-box;
    &:active,&:focus{
      outline: none;
    }
  }
`
const Tag = () => {
  const [context , setContext] = useState('');
  const [tagging, setTagging] = useState(['애플워치','에어팟']); 
  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus()
  });
  const handleChange = (e) =>{
    setContext(e.target.value);
    //setTagging(tagging.push(e.target.value));
  }
  const handleEnter = (e) =>{
    if(e.key === 'Enter' && tagging.length < 10){
      setTagging(
        [...tagging,e.target.value]
      )
      setContext('')
    }else if(tagging.length >= 10){
      alert('최대 10개까지 등록할 수 있습니다.')
      setContext('')
    }
  }
  const removeBtn = (e) =>{
    setTagging(tagging.filter((el)=>el !== e))
  }

  return <>
  <TagContainer>
    <h1>Enter your wish list</h1>
      <ul>
        {tagging.map((el,id)=>{
          return <li key = {id} onClick = {()=>removeBtn(el)}>{el} 
          <button>&times;</button></li>
        })}
      </ul>
      <input ref = {inputRef} type = 'text' 
      value= {context} onChange = {handleChange} 
      onKeyPress = {(e)=>handleEnter(e)}/>
    </TagContainer>
  </>
}

export default Tag;