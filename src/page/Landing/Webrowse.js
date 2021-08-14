import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
const AniF = keyframes`
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
  grid-template-rows: .2fr auto 1fr 50px;
  justify-items: center;
  font-size: .2rem;
  color:#fff;
  font-weight: 800;
  background: linear-gradient(126.42deg, #4ECCC6 4.74%, #9B51E0 71.29%);
  .header{
    grid-row: 2;
    margin-bottom: 1.22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      font-size: .36rem;
      padding-left: .42rem;
      background-image: url('https://static.nicegoodthings.com/works/vera/white.logo.png');
      background-size: .4rem;
      background-repeat: no-repeat;
      margin-bottom: .2rem;
    }
    .sub_title{
      font-weight: normal;
      font-size: .32rem;
    }
  }
  .content{
    grid-row: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    > .desc{
      font-size: .3rem;
      margin-bottom: .8rem;
    }
    .steps{
      display: flex;
      justify-content: space-around;
      gap: 20px;
      .step{
        width:2rem;
        img{
          filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.29));
          border-radius: 10px;
          width:100%;
        }
        .tip{
          margin-top: .2rem;
          text-align: center;
          line-height: 1.4;
          display: flex;
          flex-direction: column;
          font-size: .2rem;
        }
      }
    }
  }
  .arrow{
    position: absolute;
    top: .2rem;
    right: 20px;
    height: 50%;
    width: 30%;
    animation: ${AniF} 1s ease infinite;
   animation-direction: alternate;
  }
`;
export default function WebrowseLanding() {
  useEffect(() => {
    document.title = "Webrowse Guiding Page"
  }, [])
  return (
    <StyledTip>
      <img className="arrow" src="https://api.tbxproject.com/images/action_arrow.svg" alt="arrow" />
      <div className="header">
        <h1 className="title">Webrowse</h1>
        <h2 className="sub_title">
          Sync tabs with your teammates!
        </h2>
      </div>
      <div className="content">
        <div className="desc">Get started in 3 simple steps</div>
        <ul className="steps">
          <li className="step">
            <img src="https://static.nicegoodthings.com/works/vera/4cO1rX.png" alt="step 1" />
            <div className="tip">
              <i className="num">1.</i>
              <span className="desc">
                Click on the puzzle icon
              </span>
            </div>
          </li>
          <li className="step">
            <img src="https://static.nicegoodthings.com/works/vera/v0pny7.png" alt="step 2" />
            <div className="tip">
              <i className="num">2.</i>
              <span className="desc">
                Pin Webrowse
              </span>
            </div>
          </li>
          <li className="step">
            <img src="https://static.nicegoodthings.com/works/vera/xV8kkq.png" alt="step 3" />
            <div className="tip">
              <i className="num">3.</i>
              <span className="desc">
                Click on Webrowse to open a shared window
              </span>
            </div>
          </li>
        </ul>
      </div>
    </StyledTip>
  )
}
