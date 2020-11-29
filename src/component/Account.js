import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export default function Account({ avator = '', nickname = '杨二' }) {
  return (
    <StyledWrapper>
      {nickname}
      <input type="text" className="input" />
      <button className="btn">{avator}</button>
    </StyledWrapper>
  );
}
