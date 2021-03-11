import styled from 'styled-components';

const StyledWrapper = styled.section`
  margin: 0.3rem auto;
  padding: 0 0.5rem;
  @media (min-width: 320px) and (max-width: 860px) {
    padding: 0;
  }
  > .title {
    width: fit-content;
    color: #666;
    text-align: center;
    font-size: 0.3rem;
    font-weight: 800;
    padding: 0 0.5rem 0.15rem 0.5rem;
    border-bottom: 1px dotted #dde;
    margin: 0 auto;
    margin-bottom: 0.2rem;
  }
`;

export default StyledWrapper;
