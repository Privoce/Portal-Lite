import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-size: 0.12rem;
  height: 100%;
  display: flex;
  flex-direction: column;
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
        /* text-shadow: 0 0 10px black; */
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

  .loading {
    font-size: 0.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledWrapper;
