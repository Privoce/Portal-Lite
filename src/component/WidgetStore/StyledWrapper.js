import styled from 'styled-components';

const StyledWrapper = styled.section`
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    position: relative;
    background: #fff;
    border-radius: 0.04rem;
    height: 90vh;
    width: 80vw;
    overflow: auto;
       padding-top: 0.75rem;
       padding-bottom: 0.2rem;
    overflow: hidden;
}
    .tabs {
      position: relative;
      /* background-color: #fff; */
      display: flex;
      position: absolute;
      left:0;
      top: 0;
      width:100%;
      .tab {
        padding: 0.2rem 0;
        flex: 1;
        border-bottom: 1px solid #606368;
        &.selected {
          border-bottom: 3px solid #000;
        }
      }
    }
    .list {
      height:100%;
      padding:  0.2rem;
      padding-top: .1rem;
      overflow-y: scroll;
      overflow-y: overlay;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.15rem;
      justify-items: center;
      @media screen and (max-width: 414px) {
        grid-template-columns: repeat(1, 1fr);
      }
      &.added {
      }
    }
    .empty {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .tip {
        padding: 0.2rem;
        font-size: 0.2rem;
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      z-index: 998;
      top: 0.05rem;
      right: 0.05rem;
      width: 0.4rem;
      height: 0.4rem;
    }
    @media screen and (max-width: 414px) {
      width: 5rem;
    }
  }
`;

export default StyledWrapper;
