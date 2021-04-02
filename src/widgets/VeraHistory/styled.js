import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 0.2rem;
  .list {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 46.5%);
    grid-template-rows: auto;
    grid-column-gap: 0.4rem;
    grid-row-gap: 0.15rem;
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
