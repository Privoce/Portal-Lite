// import React from 'react'
import styled, { keyframes } from 'styled-components';
const AniG = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const StyledTip = styled.section`

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${AniG} 15s ease infinite;
  .content{
    user-select: none;
    color:#fff;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  .title{
    text-transform: uppercase;
    font-size: .6rem;
    font-weight: 800;
    padding-bottom: .8rem;
  }
  .sub_title{
    font-size: .4rem;
    padding-bottom: .1rem;
  }
  .feats{
    font-size: .3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0.3rem;
    list-style: circle;
    .feat{
      font-size: .2rem;
      padding-bottom: .1rem;
    }
  }
  }
`;
export default function VeraLanding() {
  return (
    <StyledTip>
      <div className="content">
        <h1 className="title">Welcome to Vera world!</h1>
        <h2 className="sub_title">Vera can help you:</h2>
        <ul className="feats">
          <li className="feat">Real-time audio and video communication with others</li>
          <li className="feat">Sharing the workspace</li>
          <li className="feat">Real-time display others&apos; mouse position</li>
          <li className="feat">Chat with others</li>
        </ul>

      </div>
    </StyledTip>
  )
}
