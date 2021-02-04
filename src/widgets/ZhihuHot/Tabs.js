import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
const StyledWrapper = styled.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  .tab {
    font-size: 0.2rem;
    padding: 0.05rem 0.1rem;
    border: 1px solid #efe;
    margin-right: 0.1rem;
    cursor: pointer;
    &.active {
      background-color: #eee;
      color: #222;
    }
  }
`;

export default function Tabs({ currTab, updateCurrTab, name, toggleWidgetSettingVisible }) {
  const [tabs, setTabs] = useState(null);
  useEffect(() => {
    const getTabs = async () => {
      const tabs = await fetch(`${process.env.REACT_APP_SERVICE_DOMAIN}/service/zhihu/hot/tabs`);

      const { code, data } = await tabs.json();
      if (code != 0) {
        // setErrTip(msg);
        return;
      }
      setTabs(data);
    };
    getTabs();
  }, []);
  const handleUpdate = ({
    target: {
      dataset: { id }
    }
  }) => {
    console.log({ id });
    if (id !== currTab) {
      updateCurrTab(id);
      toggleWidgetSettingVisible();
    }
  };
  if (!tabs || tabs.length == 0) return null;
  return createPortal(
    <StyledWrapper>
      {tabs.map((t) => {
        const { identifier, name } = t;
        return (
          <span
            className={`tab ${currTab == identifier ? 'active' : ''}`}
            data-id={identifier}
            onClick={handleUpdate}
            key={identifier}
          >
            {name}
          </span>
        );
      })}
    </StyledWrapper>,
    document.querySelector(`#widget-${name}-setting`)
  );
}
