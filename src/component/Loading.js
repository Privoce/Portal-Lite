import styled from 'styled-components';
const StyledWrapper = styled.section`
  font-size: 0.2rem;
  padding: 0.6rem 0;
  color: #666;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading({ tip = '加载中' }) {
  return <StyledWrapper>{tip}</StyledWrapper>;
}
