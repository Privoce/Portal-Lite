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
