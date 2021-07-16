import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

// Todos : 중복되는 css
const borderRadius = '1rem 1rem 1rem 1rem'
const mainColor = 'mediumturquoise'
// Todos : keyframes
const movingExitBtn = keyframes`
0%{ transform : rotate(-10deg)}
50%{ transform : rotate(35deg)}
100%{ transform : rotate(80deg)}
`
const showModalBg = keyframes`
  from { opacity: 0}
  to {opacity: 1}
`
const showModal = keyframes`
  from{ opacity : 0; margin-top : -30px;}
  to{ opacity : 1; margin-top:0;}
`
// Todos : 각 스타일드 컴포넌트
const ModalClick = styled.button`
background-color: ${mainColor};
border-radius:  ${borderRadius};
border : none;
font-size: 24px;
font-weight : 800;
color : white;
padding : 10px 15px;
transition : 0.4s;
cursor : pointer;
&:active,&:focus{
    outline : none;
    }
`
//!!모달박스가 아닌 부분은 전부 흐려져야 함.
const ModalBackground = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${showModalBg}.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ModalBox = styled.div`
  width : 50%;
  height : 500px;
  background-color: #fff;
  border-radius: ${borderRadius};
  //box-shadow: 1px 1px 15px rgb(219, 235, 234);
  position: absolute;
  top : 100px;
  left : 25%;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition : 0.4s;
  animation: ${showModal}.4s;
  > input{
    margin :10px;
    padding : 5px 10px;
    width : 70%;
    height : 30px;
    font-size: 18px;
    border-radius:  ${borderRadius};
    border : none;
    background-color: whitesmoke;
    &:active,&:focus{
    outline : none;
    }
  }
`
const ModalBtns = styled.button`
margin : 5px 10px;
padding : 7px;
width : 70%;
border : none;
background-color:  ${mainColor};
border-radius:  ${borderRadius};
font-size : 16px;
cursor : pointer;
&:hover{
  opacity: 0.8;
}
&.login0{
  background-color: rgb(75, 101, 173);
  color : white;
  margin-top : 30px;
}
&.login1{
  background-color: white;
  border:1px solid grey;
}
&.login2{
  background-color: rgb(255, 227, 70);
}
`
const ExitBtn = styled.div`
cursor: pointer;
font-size : 20px;
position : absolute;
top : 30px;
right : 30px;
&:hover{
  animation : ${movingExitBtn} 400ms 0s infinite linear alternate-reverse;
}
`
//Todos : Modal 컴포넌트 작성.
const Modal = () => {

  const [modal , setModal] = useState(false);
  const [login, setLogin] = useState(['Facebook 로그인','Google 로그인','Kakao 로그인','회원가입'])

  const handleClickForLogin = () =>{
    setModal(!modal);
  }
  return <>
    <ModalClick onClick = {handleClickForLogin}>Log-In</ModalClick>
    {!modal ? <></> : 
    <ModalBackground>
    <ModalBox >
      <ExitBtn onClick = {handleClickForLogin}>&times;</ExitBtn>
      <h2>더 많은 혜택을 <br/>누려보세요!🌸</h2>
      <input type = 'text' placeholder = 'ID를 입력하세요'></input>
      <input type = 'password' placeholder = 'PW를 입력하세요'></input>
      {login.map((el,idx)=>{
        return <ModalBtns key = {idx} className = {'login'+idx}>{el}</ModalBtns>
      })}
    </ModalBox>
    </ModalBackground>
    }
    </>
}

export default Modal;