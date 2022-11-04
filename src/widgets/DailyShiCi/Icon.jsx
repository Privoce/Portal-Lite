import styled from 'styled-components';

const StyledIcon = styled.button`
  padding: 0.05rem;
  border-radius: 50%;
  line-height: 1;
  border: 1px solid #666;
  position: absolute;
  top: 0.14rem;
  left: 0.14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.4;
  font-size: 0.1rem;
  &:hover {
    opacity: 1;
  }
`;

function Icon({ children, ...props }) {
  return <StyledIcon {...props}>{children}</StyledIcon>;
}

export default Icon;
