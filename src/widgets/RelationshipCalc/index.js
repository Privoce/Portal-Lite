import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useWidgetSettings } from '../../hooks';
import relationship from 'relationship.js';
import Calls from './calls';
// import Setting from './Setting';

// http://worldtimeapi.org/api/ip 根据IP地址获取当地时间
// http://worldtimeapi.org/api/timezone 获取时区列表
const StyledWrapper = styled.section`
  font-size: 0.2rem;
  /* padding: 0.1rem; */
  display: flex;
  flex-direction: column;
  height: 100%;
  user-select: none;
  .display {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0.12rem;
    /* font-size: 0.3rem; */
    .desc {
      font-size: 0.22rem;
      padding: 0.08rem 0;
      line-height: 1.3;
    }
    .result {
      .prefix {
        font-size: 0.18rem;
        color: #999;
        margin-right: 0.1rem;
      }
      font-weight: 800;
      padding: 0.12rem 0;
      font-size: 0.38rem;
    }
  }
  .opts {
    padding: 0.08rem 0.12rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d3d5d6;
    border-bottom: 1px solid #d3d5d6;
    .sex {
      display: flex;
      align-items: center;
      .prefix {
        padding-left: 2px;
        font-size: 0.18rem;
        color: #999;
      }
      .val {
        width: 0.4rem;
        height: 0.4rem;
        padding: 0.04rem;
        border: 1px solid #d3d5d6;
        border-radius: 50%;
        margin-right: 0.15rem;
        line-height: 1;
        &.curr {
          border-color: #fe5a3f;
          background-color: #fe5a3f;
          color: #fff;
        }
      }
    }
    .links {
      display: flex;
      align-items: center;
    }
  }
  .btns {
    background: #f2f2f2;
    padding: 0.2rem 0.12rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.06rem;
    .btn {
      font-size: 0.24rem;
      background: #fff;
      color: #000;
      padding: 0.14rem 0;
      border: 1px solid #d4d4d4;
      border-radius: 5px;
      &:disabled {
        color: #999 !important;
      }
      &:not(:disabled):active {
        border-color: #fe5a3f;
        transform: scale(0.98);
        opacity: 0.8;
      }
      &.eq {
        grid-column: span 2;
        color: #fff;
        background: #fe5a3f;
        border-color: #fe5a3f;
      }
      &.back,
      &.reverse {
        color: #fe5a3f;
      }
      &.reverse {
        grid-column: span 2;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &.ac {
        color: #fe5a3f;
      }
    }
  }
`;
export default function Relationship() {
  // const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  const [calls, setCalls] = useState([]);
  const [result, setResult] = useState(null);
  const [option, setOption] = useState({ sex: 1, reverse: false });
  const [currSex, setCurrSex] = useState(1);
  const handleCallClick = ({ target }) => {
    const { call, sex } = target.dataset;
    console.log({ target, call });
    setResult(null);
    setCurrSex(sex);
    setCalls((prev) => {
      return [...prev, call];
    });
  };
  const handleClear = () => {
    setCalls([]);
    setResult(null);
  };
  const handleRoleReverseClick = () => {
    setOption((prev) => {
      let { reverse, sex } = prev;
      return { sex, reverse: !reverse };
    });
    // handleCalc();
  };
  const handleSexClick = ({ target }) => {
    let { val } = target.dataset;
    let { sex } = option;
    if (sex == val) return;
    setOption((prev) => {
      let { reverse } = prev;
      return { sex: val, reverse };
    });
    if (calls.length == 0) {
      setCurrSex(val);
    }
    // handleCalc();
  };
  const handleCalc = () => {
    if (calls.length == 0) return;
    let res = relationship({ text: calls.join('的'), ...option });
    console.log({ res, option });
    if (res.length == 0) {
      setResult(['关系有点复杂哦~']);
    } else {
      setResult(res.join('/'));
    }
  };
  const handleBackClick = () => {
    setResult(null);
    console.log({ calls });
    let tmp = calls.slice(0, -1);
    setCalls(tmp);
  };
  useEffect(() => {
    handleCalc();
  }, [option]);
  const { sex, reverse } = option;
  return (
    <StyledWrapper>
      <div className="display">
        <div className="desc">{calls.join('的')}</div>
        {result && (
          <div className="result">
            <span className="prefix">{reverse ? 'Ta称呼我:' : '我称呼Ta:'}</span>
            {result}
          </div>
        )}
      </div>
      <div className="opts">
        <div className="sex">
          <span className="prefix">我的性别：</span>
          <button className={`val ${sex == 1 ? 'curr' : ''}`} onClick={handleSexClick} data-val={1}>
            男
          </button>
          <button className={`val ${sex == 0 ? 'curr' : ''}`} onClick={handleSexClick} data-val={0}>
            女
          </button>
        </div>
        {/* <div className="links">
          <button className="chengwei">只知称谓？</button>
          <button className="intro">使用说明</button>
        </div> */}
      </div>
      <div className="btns">
        {Calls.map((c) => {
          const { txt, val, sex } = c;
          const { sex: optSex } = option;
          let disableFu = (calls.length == 0 && optSex == 1) || currSex == 1;
          let disableQi = (calls.length == 0 && optSex == 0) || currSex == 0;
          let disabled = (txt == '夫' && disableFu) || (txt == '妻' && disableQi);
          return (
            <button
              key={val}
              disabled={disabled}
              onClick={handleCallClick}
              className="btn"
              data-call={val}
              data-sex={sex}
            >
              {txt}
            </button>
          );
        })}

        <button className="btn back" disabled={!calls.length} onClick={handleBackClick}>
          撤回
        </button>
        <button className="btn ac" onClick={handleClear}>
          清除
        </button>
        <button className="btn reverse" onClick={handleRoleReverseClick}>
          互换
        </button>
        <button className="btn eq" onClick={handleCalc}>
          =
        </button>
      </div>
    </StyledWrapper>
  );
}
