import { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconClose from '../Common/Icons/Close';
const StyledIcon = styled.div`
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  /* width: 0.2rem;
  height: 0.2rem; */
  z-index: 996;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.4;
  .icon {
    width: 0.2rem;
    height: 0.2rem;
  }
  &:hover {
    opacity: 1;
  }
  .tab_name {
    margin-top: 0.05rem;
    font-size: 0.08rem;
  }
`;
const StyledWrapper = styled.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;
  z-index: 996;
  position: absolute;
  left: 0;
  top: 0;
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
  .icon_close {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
  }
`;

export default function Tabs({ currTab, updateCurrTab }) {
  const [tabExpand, setTabExpand] = useState(false);
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
  const toggleTabExpand = () => {
    setTabExpand((prev) => !prev);
  };
  const handleUpdate = ({
    target: {
      dataset: { id }
    }
  }) => {
    console.log({ id });
    if (id !== currTab) {
      updateCurrTab(id);
      toggleTabExpand();
    }
  };
  if (!tabs || tabs.length == 0) return null;
  if (!tabExpand)
    return (
      <StyledIcon onClick={toggleTabExpand}>
        <svg
          t="1610035029137"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5559"
          // width="128"
          // height="128"
        >
          <path
            d="M423.563636 446.836364h-335.127272c-10.24 0-18.618182-8.378182-18.618182-18.618182V93.090909c0-10.24 8.378182-18.618182 18.618182-18.618182h335.127272c10.24 0 18.618182 8.378182 18.618182 18.618182v335.127273c0 10.24-8.378182 18.618182-18.618182 18.618182zM924.392727 446.836364h-335.127272c-10.24 0-18.618182-8.378182-18.618182-18.618182V93.090909c0-10.24 8.378182-18.618182 18.618182-18.618182h335.127272c10.24 0 18.618182 8.378182 18.618182 18.618182v335.127273c0 10.24-8.378182 18.618182-18.618182 18.618182zM423.563636 943.010909h-335.127272c-10.24 0-18.618182-8.378182-18.618182-18.618182v-335.127272c0-10.24 8.378182-18.618182 18.618182-18.618182h335.127272c10.24 0 18.618182 8.378182 18.618182 18.618182v335.127272c0 10.24-8.378182 18.618182-18.618182 18.618182z"
            fill="#4585F5"
            p-id="5560"
          ></path>
          <path
            d="M756.829091 756.829091m-186.181818 0a186.181818 186.181818 0 1 0 372.363636 0 186.181818 186.181818 0 1 0-372.363636 0Z"
            fill="#4585F5"
            p-id="5561"
          ></path>
        </svg>
        <span className="tab_name">{tabs.filter((t) => t.identifier == currTab)[0].name}</span>
      </StyledIcon>
    );
  return (
    <StyledWrapper>
      <IconClose className="icon_close" onClick={toggleTabExpand} />
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
    </StyledWrapper>
  );
}
