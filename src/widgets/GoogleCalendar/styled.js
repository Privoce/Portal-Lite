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
      .btn {
        background-color: #5c4ddf;
        color: #fff;
        border-radius: 0.06rem;
        padding: 0.06rem 0.1rem;
      }
      .date {
        font-size: 0.14rem;
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
  }
`;

export default StyledWrapper;
