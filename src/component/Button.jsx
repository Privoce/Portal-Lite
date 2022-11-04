import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 0.32rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.46rem;
  background: linear-gradient(180deg, #ff7c00 0%, #ff5300 100%);
  box-shadow: 0rem 0.12rem 0.3rem 0rem rgba(255, 83, 0, 0.24);
  border-radius: 0.5rem;
  padding: 0.27rem 1.76rem;
  border: none;
  outline: none;
  &[disabled] {
    background: #f2f2f2;
    box-shadow: none;
    color: #c9c9c9;
  }
  &[type='ghost'] {
    box-shadow: none;
    color: #ff5300;
    background: none;
    border: 1px solid #ff5300;
  }
`;

export default StyledButton;
