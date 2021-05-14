import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useUsername from './hooks/useUsername';
import { selectText } from './hooks/utils';
import ContentEditable from 'react-contenteditable';
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
  color: var(--vera-font-color);
  border-radius: var(--vera-border-radius);
  background-color: var(--vera-button-bg-color);
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
  const text = useRef(finalName);
  useEffect(() => {
    if (local && username) {
      setFinalName(username);
      console.log('set final name', local, username);
    }
  }, [username, local]);
  const handleChange = ({ target }) => {
    console.log({ target });
    text.current = target.value;
    updateUsername(text.current);
  };
  const handleClick = ({ target }) => {
    selectText(target);
  };
  // const handleBlur = () => {
  //   updateUsername(text.current);
  // };
  return (
    <StyledWrapper className={`username ${fixed ? 'fixed' : ''}`}>
      <ContentEditable
        onClick={handleClick}
        disabled={readonly}
        html={finalName}
        onChange={handleChange}
        // onBlur={handleBlur}
      ></ContentEditable>
    </StyledWrapper>
  );
}
