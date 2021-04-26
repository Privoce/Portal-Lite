import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useUsername from './hooks/useUsername';
import { selectText } from './hooks/utils';
const StyledWrapper = styled.div`
  line-height: 1;
  max-width: 100px;
  user-select: text;
  /* width: 100%;
  width: -webkit-fill-available; */
  border: none;
  text-align: center;
  padding: 10px 6px;
  font-size: 18px;
  color: var(--font-color);
  border-radius: var(--border-radius);
  background-color: var(--button-bg-color);
  &.fixed {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    > input {
      padding: 4px 6px;
    }
  }
`;

export default function Username({ local = false, name = 'Guest', readonly = true, fixed = true }) {
  const { username, updateUsername } = useUsername();
  const [finalName, setFinalName] = useState((local ? username || 'Guest' : name) || 'Guest');
  useEffect(() => {
    if (local && username) {
      setFinalName(username);
    }
  }, [username, local]);
  const handleChange = ({ target }) => {
    let newVal = target.innerText;
    updateUsername(newVal);
  };
  const handleClick = ({ target }) => {
    selectText(target);
  };
  return (
    <StyledWrapper
      className={`username ${fixed ? 'fixed' : ''}`}
      contentEditable={!readonly}
      onClick={handleClick}
      type="text"
      onInput={username ? null : handleChange}
    >
      {finalName}
    </StyledWrapper>
  );
}
