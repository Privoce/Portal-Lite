import styled, { keyframes } from 'styled-components';
import { AiOutlineCloudServer } from 'react-icons/ai';
const AniFade = keyframes`
  from{
    opacity:.2;
  }
  to{
    opacity:.8;
  }
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.6rem 0.8rem;
  .icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: -0.4rem;
    animation: ${AniFade} 1s infinite alternate;
  }
`;

export default function Loading() {
  return (
    <StyledWrapper>
      <AiOutlineCloudServer color="#36ab60" className="icon" />
    </StyledWrapper>
  );
}
