import styled from 'styled-components';

const StyledWrapper = styled.section`
  margin: 0.5rem auto;
  /* min-height: 100vh; */
  /* max-width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center; */
  > .title {
    color: #333;
    text-align: center;
    font-size: 0.3rem;
    font-weight: 800;
    padding-bottom: 0.2rem;
    border-bottom: 1px dashed #eee;
    margin-bottom: 0.2rem;
  }
`;

export default StyledWrapper;
