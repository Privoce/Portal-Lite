import styled from 'styled-components';

const StyledWrapper = styled.section`
  margin: 0 auto;
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 375px) {
    width: 4.68rem;
  }
  .search {
    padding-top: 0.91rem;
    padding-bottom: 0.6rem;
    width: 100%;
  }
  .widgets {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.24rem;
    justify-content: flex-start;
  }
  .add_widget {
    position: fixed;
    bottom: 0.36rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.18rem;
    font-weight: 400;
    color: #333;
    line-height: 0.25rem;
  }
`;

export default StyledWrapper;
