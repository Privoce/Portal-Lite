import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-size: 0.12rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  .topbar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.1rem;
    .today {
      display: flex;
      align-items: center;
      .btn {
        background-color: #5c4ddf;
        color: #fff;
        border-radius: 0.06rem;
        padding: 0.06rem 0.1rem;
        &[disabled] {
          background-color: #aaa;
        }
      }
      .update {
        /* display: flex; */
        svg {
          width: 0.28rem;
          height: 0.28rem;
          /* width: 100%;
          height: 100%; */
        }
      }
      .date {
        font-weight: 800;
        font-size: 0.16rem;
        color: #333;
        padding: 0 0.2rem;
      }
    }
  }
  .list {
    margin-top: 0.12rem;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item {
      width: 100%;
      position: relative;
      > .title {
        font-size: 0.2rem;
        color: #ccc;
        margin-top: 0.2rem;
        padding-bottom: 0.1rem;
        position: sticky;
        top: 0;
        background: #fff;
        z-index: 2;
      }
      > .evts {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
      }
    }
  }
  .calendars {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    width: fit-content;
    display: flex;
    padding: 0.05rem;
    margin: 0.05rem 0.21rem;
    border-radius: 5px;
    border: 1px solid #eee;
    .calendar {
      display: flex;
      margin-right: 0.15rem;
      .sqr {
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.1rem;
      }
      .title {
        font-size: 0.14rem;
      }
    }
  }
  .loading {
    font-size: 0.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledWrapper;
