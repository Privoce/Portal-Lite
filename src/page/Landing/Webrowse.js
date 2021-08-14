// import React from 'react'
import styled, { keyframes } from 'styled-components';
const AniG = keyframes`
  from{
    opacity:1;
  }
  to{
    opacity:0.3;
  }
`;
const StyledTip = styled.section`
position: relative;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 0.5fr auto 1fr 50px;
  justify-items: center;
  background-image: url('https://static.nicegoodthings.com/works/vera/bg_sunrise.png');
  background-size: cover;
  font-size: .2rem;
  color:#fff;
  font-weight: 800;

  .title{
    grid-row: 2;
    opacity: .6;
    margin-bottom: .6rem;
  }
  .content{
    grid-row: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    .desc{
      font-size: .3rem;
      margin-bottom: .4rem;
    }
    .steps{
      display: flex;
      justify-content: space-around;
      gap: 20px;
      .step{
        width:2rem;
        img{
          width:100%;
        }
        .tip{
          margin-top: .2rem;
          text-align: center;
          line-height: 1.4;
        }
      }
    }
  }
  .footer{
    grid-row: 4;
    color:darkgray;
  }
  .arrow{
    position: absolute;
    top: .2rem;
    right: 20px;
    height: 50%;
    width: 30%;
    animation: ${AniG} 1s ease infinite;
   animation-direction: alternate;
  }
`;
export default function WebrowseLanding() {
  return (
    <StyledTip>
      <h2 className="title">
        Webrowse - sync tabs with your teammates!
      </h2>
      <div className="content">
        <div className="desc">To get started, open the extension window</div>
        <ul className="steps">
          <li className="step">
            <img src="https://api.tbxproject.com/images/open_step_1.png" alt="step 1" />
            <div className="tip">Click on the puzzle icon
            </div>
          </li>
          <li className="step">
            <img src="https://api.tbxproject.com/images/open_step_2.png" alt="step 2" />
            <div className="tip">Pin &ldquo;Webrowse&rdquo;
            </div>
          </li>
          <li className="step">
            <img src="https://api.tbxproject.com/images/open_step_3.png" alt="step 3" />
            <div className="tip">Open the Webrowse window

            </div>
          </li>
        </ul>
      </div>
      <div className="footer">
        Webrowse 2021
      </div>
      <img className="arrow" src="https://api.tbxproject.com/images/action_arrow.svg" alt="arrow" />
    </StyledTip>
  )
}
