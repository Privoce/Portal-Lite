import styled from 'styled-components';

const StyledWrapper = styled.div`
  /* content-visibility: auto; */
  width: 6.2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    user-select: none;
    overflow-y: scroll;
    overflow-y: overlay;
    overflow-x: hidden;
    position: relative;
    width: 100%;
    height: 3.1rem;
    background: #ffffff;
    box-shadow: 0rem 0rem 0.08rem 0rem #dfdfdf;
    border-radius: 0.24rem;
    border: 0.01rem solid #ececec;
    padding: 0.29rem 0.21rem;
    transition: all 0.8s ease-in-out;

    .remove {
      cursor: pointer;
      bottom: 0.05rem;
    }
    .widget_setting_wrapper {
      z-index: 10;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      &.visible {
        visibility: visible;
      }
      &.hidden {
        visibility: hidden;
      }
      > .close {
        z-index: 11;
        position: absolute;
        right: 0.14rem;
        top: 0.14rem;
        width: 0.2rem;
        height: 0.2rem;
        cursor: pointer;
      }
      .setting {
        width: 100%;
        height: 100%;
      }
    }
  }
  > .title {
    user-select: none;
    width: 100%;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 400;
    color: #333;
    line-height: 0.2rem;
    padding-top: 0.1rem;
    padding-bottom: 0.24rem;
  }
  > .setting {
    position: absolute;
    right: 0.1rem;
    top: 0.04rem;
    z-index: 9;
    display: flex;
    padding: 0.05rem;
    cursor: pointer;
    background-color: rgba(222, 222, 222, 0.4);
    border-radius: 50%;
    width: 0.4rem;
    height: 0.4rem;
    opacity: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  > .setting_list {
    z-index: 7;
    position: absolute;
    top: 0.5rem;
    right: 0.12rem;
    display: flex;
    flex-direction: column;
    font-size: 0.14rem;
    color: #000;
    background-color: #fff;
    padding: 0.14rem;
    user-select: none;
    border-radius: 5px;
    box-shadow: 0rem 0rem 0.08rem 0rem #dfdfdf;
    .item {
      cursor: pointer;
      padding: 0.05rem;
      a {
        color: #000;
        &:hover {
          color: #fff;
        }
      }
      &:not(.sizes):hover {
        color: #fff;
        background: rgba(2, 2, 2, 0.6);
      }
      &.sizes {
        /* display: flex;
        justify-content: space-a; */
        .size {
          font-size: 0.1rem;
          border: 1px solid #333;
          padding: 0.02rem 0.04rem;
          &:not(:last-child) {
            margin-right: 0.04rem;
          }
          &.curr {
            background-color: #222;
            color: #fff;
          }
        }
      }
    }
  }
  &:hover .setting {
    opacity: 1;
  }
  &.large .container {
    height: 6.74rem;
  }
  &.noscroll .container {
    overflow: hidden;
  }
  &.compact .container {
    padding: 0;
  }
  &[type='search'],
  &[type='nav'] {
    width: 100%;

    .container {
      background: none;
      height: 100%;
      width: 100%;
      max-width: none;
      overflow: visible;
      border: none;
      box-shadow: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &[type='nav'] {
    > .setting {
      right: 0;
      top: -0.5rem;
    }
    > .setting_list {
      top: 0;
      right: 0;
    }
  }

  &:fullscreen {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    .container {
      height: fit-content;
      max-width: 8rem;
      min-height: 2.4rem;
      min-width: 4.87rem;
    }
    &.largable .container {
      height: 6.74rem;
    }
    .setting,
    .setting_list {
      display: none;
    }
  }
`;
export default StyledWrapper;
