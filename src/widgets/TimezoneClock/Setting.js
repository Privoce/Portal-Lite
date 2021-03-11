import { memo } from 'react';
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
    white-space: nowrap;
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
const getCities = (city = null) => {
  if (!city) return [];
  const timezones = {
    beijing: 'Asia/Shanghai',
    tokyo: 'Asia/Tokyo',
    london: 'Europe/London',
    losAngeles: 'America/Los_Angeles',
    moscow: 'Europe/Moscow',
    paris: 'Europe/Paris',
    newYork: 'America/New_York',
    detroit: 'America/Detroit',
    sydney: 'Australia/Sydney',
    maputo: 'Africa/Maputo'
  };
  const items = Object.keys(timezones).map((key) => {
    return {
      tz: timezones[key],
      city: city[key]
    };
  });
  console.log({ items });
  return items;
};

function Timezones({ name, city = null, currTimezones, updateTimezones }) {
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
      let newTZ = getCities(city).find((t) => t.tz == tz);
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
      {getCities(city).map((t) => {
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

export default memo(Timezones, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.currTimezones) === JSON.stringify(nextProps.currTimezones);
});
