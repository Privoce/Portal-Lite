import React from 'react';
import styled from 'styled-components';
import IconTip from './IconTip';
const StyledItem = styled.li`
  position: relative;
  width: 100%;
  height: 1.44rem;
  transition: background-size 0.5s;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.05rem;
  border: 0.01rem solid #eee;
  transition: all 0.6s;
  overflow: hidden;
  .add,
  .added {
    display: flex;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    cursor: pointer;
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    bottom: 0.1rem;
    right: 0.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .add {
    border: 1px solid #fff;
  }
  .intro {
    width: 100%;
    height: 100%;
    background-color: rgba(2, 2, 2, 0.8);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: opacity 0.5s;
    .title {
      font-size: 0.24rem;
      font-weight: 800;
      margin-bottom: 0.2rem;
    }
    .desc {
      padding: 0 0.2rem;
      line-height: 1.4;
      font-size: 0.12rem;
    }
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0rem 0.08rem 0.16rem 0rem #ececec,
      0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5), 0rem 0.04rem 0.24rem 0rem #a8a8a8;
    .intro {
      opacity: 0;
    }
  }
`;
const StyledRecent = styled.div`
  display: flex;
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: -1px;
  background: linear-gradient(135deg, transparent 20%, #fff 30%, #fff 45%, transparent 45%);
  svg {
    width: 100%;
    height: 100%;
  }
`;
const Recents = {
  create: (
    <StyledRecent>
      <IconTip />
    </StyledRecent>
  ),
  update: (
    <StyledRecent>
      <IconTip color="#3db35d" />
    </StyledRecent>
  )
};
// https://gitee.com/zyanggc/oss/raw/master/works/icon.check.png
export default function Item({ data, addWidget }) {
  const { title, description, screenshot, recent } = data;
  return (
    <StyledItem className="widget" style={{ backgroundImage: `url(${screenshot})` }}>
      <div className="intro">
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>
        {recent ? Recents[recent.type] : null}
      </div>
      <div className="add" onClick={addWidget}>
        <img
          src="https://gitee.com/zyanggc/oss/raw/master/works/icon.add.png"
          alt="新增组件小图标"
        />
      </div>
    </StyledItem>
  );
}
