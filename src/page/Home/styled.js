import styled from 'styled-components';

const StyledWrapper = styled.section`
  position: relative;
  margin: 0 auto;
  padding-bottom: 0.6rem;
  width: 10.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .search {
    padding-top: 0.91rem;
    padding-bottom: 0.6rem;
    /* padding-top: 0.4rem;
    padding-bottom: 0.4rem; */
    width: 6.6rem;
  }
  /* 响应式布局 */
  @media (min-width: 320px) and (max-width: 480px) {
    .search {
      width: 4.68rem;
    }
  }
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

export default StyledWrapper;
