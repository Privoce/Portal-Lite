import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useUsername from './hooks/useUsername';
import { selectText } from './hooks/utils';
import ContentEditable from 'react-contenteditable';
const StyledWrapper = styled.div`
  line-height: 1;
  min-width: 30px;
  max-width: 100px;
  user-select: text;
  border: none;
  text-align: center;
  padding: 8px 6px;
  font-size: 1.8em;
  color: #fff;
  border-radius: var(--vera-border-radius);
  background-color: rgba(2, 2, 2, 0.3);
  &.fixed {
    position: absolute;
    top: 1.2em;
    left: 50%;
    transform: translateX(-50%);
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
