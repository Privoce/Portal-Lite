import { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconClose from '../Common/Icons/Close';
const StyledIcon = styled.div`
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  z-index: 996;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  .icon {
    width: 0.2rem;
    height: 0.2rem;
  }
  &:hover {
    opacity: 1;
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
    padding: 0.1rem;
    border: 1px solid #efe;
    margin-right: 0.1rem;
    cursor: pointer;
    &[data-selected='true'] {
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
const timezones = [
  {
    tz: 'Asia/Shanghai',
    city: '北京'
  },
  {
    tz: 'Asia/Tokyo',
    city: '东京'
  },
  {
    tz: 'Europe/London',
    city: '伦敦'
  },
  {
    tz: 'America/Los_Angeles',
    city: '洛杉矶'
  },
  {
    tz: 'Europe/Moscow',
    city: '莫斯科'
  },
  {
    tz: 'Europe/Paris',
    city: '巴黎'
  },
  {
    tz: 'America/New_York',
    city: '纽约'
  },
  {
    tz: 'America/Detroit',
    city: '底特律'
  },
  {
    tz: 'Australia/Sydney',
    city: '悉尼'
  },
  {
    tz: 'Africa/Maputo',
    city: '马普托'
  }
];
export default function Timezones({ currTimezones, updateTimezones }) {
  const [tzExpand, setTzExpand] = useState(false);
  useEffect(() => {}, []);
  const toggleTimezoneExpand = () => {
    setTzExpand((prev) => !prev);
  };
  const handleUpdate = ({ target }) => {
    const {
      dataset: { tz, selected }
    } = target;
    console.log({ tz, selected });
    if (selected == 'true') {
      updateTimezones(currTimezones.filter((c) => c.tz != tz));
    } else {
      if (currTimezones.length == 3) {
        alert('最多三个，请先去掉一个');
        return;
      }
      let newTZ = timezones.find((t) => t.tz == tz);
      console.log({ newTZ });
      updateTimezones([...currTimezones, newTZ]);
    }
    // if (id !== currTimezones) {
    //   updateTimezones(id);
    //   toggleTimezoneExpand();
    // }
  };
  if (!tzExpand)
    return (
      <StyledIcon className="expand_icon" onClick={toggleTimezoneExpand}>
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
      </StyledIcon>
    );
  return (
    <StyledWrapper>
      <IconClose className="icon_close" onClick={toggleTimezoneExpand} />
      {timezones.map((t) => {
        const { city, tz } = t;
        let selected = !!currTimezones.find((item) => {
          return item.tz == tz;
        });
        return (
          <span
            className={`tab`}
            data-selected={selected}
            data-tz={tz}
            onClick={handleUpdate}
            key={tz}
          >
            {city}
          </span>
        );
      })}
    </StyledWrapper>
  );
}
