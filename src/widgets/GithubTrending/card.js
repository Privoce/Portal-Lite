import styled from 'styled-components';

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* margin: 0.1rem 0.1rem; */
  padding: 0.2rem;
  /* border-radius: 10px; */
  border-bottom: 1px solid #e6e6e6;
  background: #ffffff;
  /* box-shadow: 34px -34px 68px #e6e6e6, -34px 34px 68px #ffffff; */
  transition: all 0.2s;
  flex-wrap: wrap;
  /* &:hover {
    transform: scale(1.1);
  } */
`;

export default StyledCard;
