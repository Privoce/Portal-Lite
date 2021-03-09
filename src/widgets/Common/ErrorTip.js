import styled from 'styled-components';
import { BiMessageError } from 'react-icons/bi';
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.18rem;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg};
  flex-direction: column;
  .icon {
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;
    width: 1rem;
    height: 1rem;
    opacity: 0.5;
  }
  .reload {
    padding: 0.06rem 0.12rem;
    border-radius: 5px;
    border: 1px solid #eee;
    margin-top: 0.4rem;
    font-size: 0.18rem;
    color: #333;
  }
`;

export default function ErrorTip({
  tip = '接口出错啦~~~',
  bg = '#fff',
  reload = null,
  reloadTxt = 'Reload'
}) {
  return (
    <StyledWrapper bg={bg}>
      <BiMessageError color="#fe6b23" className="icon" />
      <h3 className="tip"> {tip}</h3>
      {reload && (
        <button className="reload" onClick={reload}>
          {reloadTxt}
        </button>
      )}
    </StyledWrapper>
  );
}
