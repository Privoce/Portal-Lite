import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useUsername from './hooks/useUsername';
const StyledWrapper = styled.div`
  line-height: 1;
  max-width: 100px;
  user-select: text;
  width: 100%;
  width: -webkit-fill-available;
  border: none;
  text-align: center;
  padding: 10px 12px;
  font-size: 18px;
  color: var(--font-color);
  border-radius: var(--border-radius);
  background-color: var(--button-bg-color);
  &.fixed {
    position: absolute;
    top: 5px;
    right: 5px;
    > input {
      padding: 6px 8px;
    }
  }
`;
const selectText = (node) => {
  // node = document.getElementById(node);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn('Could not select text in node: Unsupported browser.');
  }
};
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
