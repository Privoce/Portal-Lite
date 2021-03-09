import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { utcToZonedTime } from 'date-fns-tz';
import { subDays, format } from 'date-fns';
import Loading from '../Common/Loading';
import Block from './Block';
const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  font-size: 0.15rem;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0.01rem;
  grid-row-gap: 0.01rem;
  .covid_icon {
    display: none;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
  }
  &:hover .covid_icon,
  &:hover .date_time {
    display: block;
  }
  .date_time {
    display: none;
    position: absolute;
    left: 0.1rem;
    bottom: 0.1rem;
    padding: 0.05rem 0.06rem;
    border-radius: 0.04rem;
    background-color: rgba(2, 2, 2, 0.5);
    color: #fff;
    font-size: 0.1rem;
  }
`;
// http://health.people.com.cn/GB/26466/431463/431576/index.html
export default function USCovid({ lang }) {
  const [loading, setLoading] = useState(true);
  const [errTip, setErrTip] = useState('');
  const [data, setData] = useState(null);
  useEffect(() => {
    const USDate = utcToZonedTime(new Date().getTime(), 'America/New_York');
    const getData = async () => {
      const resp = await fetch(
        `https://api.covidtracking.com/v2beta/us/daily/${format(
          subDays(USDate, 1),
          'yyyy-MM-dd'
        )}.json`
      );
      const { error, data, message = 'covidtracking api error' } = await resp.json();
      console.log({ error, data });
      if (error || !data) {
        // setLoading(false);
        setErrTip(message);
        return;
      }
      setData(data);
      setLoading(false);
      // console.log({ info });
    };
    getData();
  }, []);
  // 抛错
  if (errTip) {
    throw new Error(errTip);
  }
  if (loading) return <Loading />;
  const {
    date,
    cases,
    outcomes: {
      death,
      hospitalized: { currently, in_icu, on_ventilator }
    },
    testing
  } = data || {};
  console.log({ date, data });
  const { blockTitle: title } = lang;
  const blocks = [
    {
      type: 'confirmed',
      title: title.confirmed,
      data: cases.total
    },
    {
      type: 'testing',
      title: title.verifying,
      data: testing.total
    },
    {
      type: 'dead',
      title: title.death,
      data: death.total
    },
    {
      type: 'hospital',
      title: title.hospital,
      data: currently
    },
    {
      type: 'serious',
      title: title.icu,
      data: in_icu.currently
    },
    {
      type: 'maybe',
      title: title.ventilator,
      data: on_ventilator.currently
    }
  ];
  return (
    <StyledWrapper>
      <div className="date_time">
        {lang.closingDate}：{date}
      </div>
      {/* {listVisible ? (
        <List data={list} toggleListVisible={toggleListVisible} />
      ) : (
        <IconCovid className="covid_icon" onClick={toggleListVisible} />
      )}
      */}
      <>
        {blocks.map((block) => {
          return (
            <Block
              lang={lang}
              key={block.type}
              type={block.type}
              title={block.title}
              data={block.data}
            />
          );
        })}
      </>
    </StyledWrapper>
  );
}
