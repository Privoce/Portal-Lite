import styled from 'styled-components';

const StyledWrapper = styled.section`
  position: relative;
  margin: 0 auto;
  padding-bottom: 0.6rem;
  padding-top: 0.3rem;
  width: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .settings {
    position: fixed;
    right: 0.2rem;
    bottom: 0.15rem;
    .toggle {
      cursor: pointer;
      width: 0.6rem;
      height: 0.6rem;
      background-color: #fff;
      border-radius: 50%;
      padding: 0.1rem;
      z-index: 996;
      display: flex;
      align-items: center;
      box-shadow: 0 0 5px #333;
      svg {
        color: #606368;
        transition: all 0.5s;
        transform-origin: center;
      }
    }
    .setting {
      display: none;
      margin-bottom: 0.15rem;
      position: relative;
      .tip {
        visibility: hidden;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(-120%, -50%, 0);
        padding: 0.1rem 0.12rem;
        font-size: 0.14rem;
        font-weight: 800;
        color: #fff;
        background-color: #222;
        border-radius: 6px;
        white-space: nowrap;
      }
      &:hover .tip {
        visibility: visible;
      }
    }
    &.expanded {
      .toggle {
        background-color: #f1f1f1;
        svg {
          transform: rotate(45deg);
        }
      }
      .setting {
        display: block;
      }
    }
  }
  /* 响应式布局 */
  @media (min-width: 320px) and (max-width: 480px) {
    .search {
      width: 4.68rem;
    }
  }
  @media (min-width: 320px) and (max-width: 768px) {
    width: 95%;
  }
`;

export default StyledWrapper;
