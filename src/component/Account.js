import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0.16rem;
  right: 1rem;

  font-size: 0.16rem;
  font-weight: 400;
  color: #333333;
  line-height: 0.22rem;
`;
export default function Account({ avator = '', nickname = '杨二' }) {
  return (
    <StyledWrapper>
      {nickname}
      <button className="btn">{avator}</button>
    </StyledWrapper>
  );
}
