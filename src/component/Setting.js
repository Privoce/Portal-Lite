import { useState } from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.aside`
  position: absolute;
  right: 0;
  top: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .setting {
    user-select: none;
    z-index: 996;
    cursor: pointer;
    font-size: 0.16rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999;
    line-height: 0.2rem;
  }
  .modal_wrapper {
    z-index: 997;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    /* background-color: rgba(0, 0, 0, 0.3); */
    .modal {
      border: 1px solid #eee;
      background-color: #fff;
      padding: 0.28rem 0.45rem;
      border-radius: 0.04rem;
      .block {
        /* margin-bottom: 0.45rem; */
        .title {
          font-size: 0.16rem;
          font-weight: 800;
          color: #333333;
          line-height: 0.22rem;
          margin-bottom: 0.14rem;
        }
        .opts {
          display: flex;
          .opt {
            cursor: pointer;
            font-size: 0.14rem;
            font-weight: 400;
            line-height: 0.2rem;
            margin-right: 0.49rem;
            &[data-selected='true'] {
              color: #4e6df2;
            }
          }
        }
      }
      .submit_btn {
        padding: 0.06rem 0.32rem;
        background: #4e6df2;
        border-radius: 0.04rem;

        font-size: 0.16rem;
        font-weight: 500;
        color: #ffffff;
        line-height: 0.22rem;
      }
    }
  }
`;
export default function Setting({ search, updateSearch }) {
  const [expand, setExpand] = useState(false);
  // const handleSave = () => {
  //   updateSearch();
  // };
  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };
  const handleClick = ({
    target: {
      dataset: { s }
    }
  }) => {
    if (s !== search) {
      updateSearch(s);
      toggleExpand();
    }
  };

  return (
    <StyledWrapper>
      <div className="setting" onClick={toggleExpand}>
        设置
      </div>
      {expand ? (
        <div className="modal_wrapper">
          <div className="modal">
            <div className="block">
              <h2 className="title">搜索设置 </h2>
              <ul className="opts">
                <li
                  className="opt"
                  onClick={handleClick}
                  data-s="baidu"
                  data-selected={search == 'baidu'}
                >
                  百度搜索
                </li>
                <li
                  className="opt"
                  onClick={handleClick}
                  data-s="google"
                  data-selected={search == 'google'}
                >
                  谷歌搜索
                </li>
                <li
                  className="opt"
                  onClick={handleClick}
                  data-s="bing"
                  data-selected={search == 'bing'}
                >
                  必应搜索
                </li>
              </ul>
            </div>
            {/* <button className="submit_btn" onClick={handleSave}>
              保存
            </button> */}
          </div>
        </div>
      ) : null}
    </StyledWrapper>
  );
}
