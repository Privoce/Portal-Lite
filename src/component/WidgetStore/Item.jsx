import React from 'react';
import styled from 'styled-components';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import IconTip from './IconTip';
const StyledItem = styled.li`
  position: relative;
  width: 100%;
  height: 1.8rem;
  transition: background-size 0.5s;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.15rem;
  border: 0.01rem solid var(--border-color, #eee);
  overflow: hidden;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #8784ff;
    cursor: pointer;
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    bottom: 0.1rem;
    right: 0.1rem;
    transition: all 0.6s;
    svg {
      width: 80%;
      height: 80%;
    }
  }
  .intro {
    width: 100%;
    height: 100%;
    background-color: rgba(2, 2, 2, 0.95);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: opacity 0.5s;
    .title {
      text-align: center;
      color: inherit;
      font-size: 0.24rem;
      font-weight: 800;
      margin-bottom: 0.2rem;
    }
    .desc {
      color: inherit;
      padding: 0 0.2rem;
      line-height: 1.4;
      font-size: 0.12rem;
    }
  }
  &:hover {
    .icon {
      transform: scale(1.1);
    }
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
// https://static.nicegoodthings.com/privoce/icon.check.png
export default function Item({ data, addWidget, removeWidget }) {
  const { title, description, screenshot, recent, added } = data;
  return (
    <StyledItem className="widget" style={{ backgroundImage: `url(${screenshot})` }}>
      <div className="intro">
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>
        {recent ? Recents[recent.type] : null}
      </div>
      <div className="icon" onClick={added ? removeWidget : addWidget}>
        {added ? <GrFormSubtract /> : <GrFormAdd />}
      </div>
    </StyledItem>
  );
}
