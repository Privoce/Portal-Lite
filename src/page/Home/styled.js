import styled from 'styled-components';

const StyledWrapper = styled.section`
  margin: 0 auto;
  padding-bottom: 0.6rem;
  width: 10.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 414px) {
    width: 4.68rem;
  }
  .search {
    padding-top: 0.91rem;
    padding-bottom: 0.6rem;
    /* padding-top: 0.4rem;
    padding-bottom: 0.4rem; */
    width: 6.6rem;
  }
  .block {
    display: flex;
    flex-direction: column;
    width: 100%;
    .header {
      font-family: PingFangSC-Medium, PingFang SC;
      font-size: 0.16rem;
      font-weight: 500;
      color: #333;
      line-height: 0.25rem;
      margin-left: 0.25rem;
      align-self: flex-start;
      cursor: grabbing;
      user-select: none;
    }
    .boxes {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: flex-start;
      padding: 0 0.125rem;

      > div {
        margin-left: 0.125rem;
        margin-right: 0.125rem;
      }
      &.grid {
        display: grid;
      }
    }
    &.one_line {
      .header {
        margin-bottom: -0.125rem;
      }
      .boxes {
        flex-wrap: nowrap;
        overflow: scroll;
        padding-top: 0.25rem;
      }
    }
  }
  /* .add_widget {
    position: fixed;
    bottom: 0.36rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.14rem;
    font-weight: 400;
    color: #333;
    line-height: 0.25rem;
  } */
`;

export default StyledWrapper;
