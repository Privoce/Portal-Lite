// import { useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

// import IconClose from '../Common/Icons/Close';
const StyledWrapper = styled.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;

  font-size: 0.2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
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
export default function Timezones({ name, currTimezones, updateTimezones }) {
  // const [tzs, setTzs] = useState(currTimezones);
  const handleUpdate = ({ target }) => {
    const {
      dataset: { tz, selected }
    } = target;
    console.log({ tz, selected });
    if (selected == 'true') {
      let newArr = currTimezones.filter((c) => c.tz != tz);
      // setTzs(newArr);
      updateTimezones(newArr);
    } else {
      if (currTimezones.length == 3) {
        alert('最多三个，请先去掉一个');
        return;
      }
      let newTZ = timezones.find((t) => t.tz == tz);
      console.log({ newTZ });
      // setTzs([...currTimezones, newTZ]);
      updateTimezones([...currTimezones, newTZ]);
    }
    // if (id !== currTimezones) {
    //   updateTimezones(id);
    //   toggleTimezoneExpand();
    // }
  };
  return createPortal(
    <StyledWrapper>
      {/* <IconClose className="icon_close" onClick={toggleTimezoneExpand} /> */}
      {timezones.map((t) => {
        const { city, tz } = t;
        let selected = !!currTimezones.find((item) => {
          return item.tz == tz;
        });
        console.log('trigger rerender', { currTimezones });
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
    </StyledWrapper>,
    document.querySelector(`#widget-${name}-setting`)
  );
}
