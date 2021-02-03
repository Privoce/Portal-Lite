import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.15rem 0.1rem;
  width: 100%;
  height: 100%;

  &:hover {
    > .num {
      transform: scale(1.2);
    }
    .title {
      transform: scale(0.8);
    }
  }
  .compare {
    font-size: 0.1rem;
    color: #7c7c7c;
    padding-bottom: 0.1rem;
  }
  > .num {
    padding-bottom: 0.1rem;
    font-size: 0.24rem;
    font-weight: 800;
    transition: all 0.6s ease-in;
    font-family: sans-serif;
  }
  .title {
    padding-bottom: 0.14rem;
    color: #222;
    font-size: 0.18rem;
    transition: all 0.6s ease-in;
  }
  &.confirmed {
    background-color: rgba(253, 241, 241);
    .num {
      color: #cc1e1e;
    }
  }
  &.maybe {
    background-color: rgba(252, 244, 240);
    .num {
      color: #ca3f81;
    }
  }
  &.serious {
    background-color: rgba(250, 242, 246);
    .num {
      color: #f05926;
    }
  }
  &.testing {
    background-color: rgba(241, 248, 244);
    .num {
      color: #178b50;
    }
  }
  &.dead {
    background-color: rgba(243, 246, 248);
    .num {
      color: #4e5a65;
    }
  }
  &.hospital {
    background-color: rgba(243, 246, 240);
    .num {
      color: #fe6b23;
    }
  }
  .others {
    width: 100%;
    display: flex;
    justify-content: center;
    dl {
      display: flex;
      flex-direction: column;
      padding: 0.04rem;
      &:not(:last-child) {
        border-right: 1px dashed #eee;
        margin-right: 0.02rem;
      }
      dt {
        color: #999;
        padding-bottom: 0.06rem;
        font-size: 0.08rem;
      }
      dd {
        color: #000;
        font-size: 0.11rem;
      }
    }
  }
`;
const addDots = (num) => {
  return Number(num).toLocaleString('en');
};
export default function Block({ type, title, data }) {
  const {
    value,
    calculated: { change_from_prior_day, population_percent, seven_day_change_percent }
  } = data;
  return (
    <StyledWrapper key={type} className={`block ${type}`}>
      <div className="compare">
        较上日{' '}
        <span className="num">
          {Number(change_from_prior_day) > 0 ? `+ ${change_from_prior_day}` : change_from_prior_day}
        </span>
      </div>
      <div className="num">{addDots(value)}</div>
      <div className="title">{title}</div>
      <div className="others">
        <dl>
          <dt>人口占比</dt>
          <dd>{population_percent}%</dd>
        </dl>
        <dl>
          <dt>七日变化率</dt>
          <dd>{seven_day_change_percent}%</dd>
        </dl>
      </div>
    </StyledWrapper>
  );
}
