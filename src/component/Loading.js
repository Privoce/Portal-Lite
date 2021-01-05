import styled from 'styled-components';
const StyledWrapper = styled.section`
  font-size: 0.2rem;
  padding: 0.5rem;
  color: #666;
  text-align: center;
`;

export default function Loading() {
  return <StyledWrapper>加载中...</StyledWrapper>;
}
