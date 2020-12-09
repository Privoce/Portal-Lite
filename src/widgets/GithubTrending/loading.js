import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: 0.22rem;
`;
export default function Loading() {
  return <StyledWrapper>加载中...</StyledWrapper>;
}
