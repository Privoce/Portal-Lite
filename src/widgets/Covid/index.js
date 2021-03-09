import { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconCovid from '../Common/Icons/Covid';
import Loading from '../Common/Loading';
import Block from './Block';
import List from './List';
const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  font-size: 0.15rem;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 0.02rem;
  grid-row-gap: 0.02rem;
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
export default function Covid() {
  const [loading, setLoading] = useState(true);
  const [errTip, setErrTip] = useState('');
  const [listVisible, setListVisible] = useState(false);
  const [data, setData] = useState(null);
  const toggleListVisible = () => {
    setListVisible((prev) => !prev);
  };
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`${process.env.REACT_APP_SERVICE_DOMAIN}/service/covid`);
      const { data } = await resp.json();
      if (!data) {
        setLoading(false);
        setErrTip('⚠️接口出错啦⚠️');
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
    times,
    gntotal,
    deathtotal,
    sustotal,
    curetotal,
    jwsrNum,
    asymptomNum,
    econNum,
    heconNum,
    add_daily: {
      addcon,
      addsus,
      adddeath,
      addcure,
      addecon_new,
      addhecon_new,
      addjwsr,
      addasymptom
    },
    list
  } = data || {};
  const blocks = [
    {
      type: 'confirmed',
      title: '累计确诊',
      num: gntotal,
      cNum: addcon
    },
    {
      type: 'heal',
      title: '累计治愈',
      num: curetotal,
      cNum: addcure
    },
    {
      type: 'dead',
      title: '累计死亡',
      num: deathtotal,
      cNum: adddeath
    },
    {
      type: 'maybe',
      title: '现存疑似',
      num: sustotal,
      cNum: addsus
    },
    {
      type: 'now-confirmed',
      title: '现存确诊',
      num: econNum,
      cNum: addecon_new
    },
    {
      type: 'serious',
      title: '现存重症',
      num: heconNum,
      cNum: addhecon_new
    },
    {
      type: 'jwsr',
      title: '境外输入',
      num: jwsrNum,
      cNum: addjwsr
    },
    {
      type: 'asym',
      title: '现存无症状',
      num: asymptomNum,
      cNum: addasymptom
    }
  ];
  return (
    <StyledWrapper>
      <div className="date_time">{times}</div>
      {listVisible ? (
        <List data={list} toggleListVisible={toggleListVisible} />
      ) : (
        <IconCovid className="covid_icon" onClick={toggleListVisible} />
      )}
      <>
        {blocks.map((block) => {
          return <Block key={block.type} data={block} />;
        })}
      </>
    </StyledWrapper>
  );
}
