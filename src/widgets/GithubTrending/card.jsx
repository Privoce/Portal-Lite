import styled from 'styled-components';

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.1rem 0.15rem;
  border-bottom: 1px solid #e6e6e6;
  transition: all 0.2s;
  flex-wrap: wrap;
  &:hover {
    background-color: #eee;
  }
`;

export default StyledCard;
