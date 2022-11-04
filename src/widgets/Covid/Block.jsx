import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  }
  > .num {
    font-size: 0.24rem;
    font-weight: 800;
    transition: all 0.5s ease-in;
  }
  .title {
    color: #222;
    font-size: 0.18rem;
    transition: all 0.5s ease-in;
  }
  &.now-confirmed {
    background-color: #fdf1f1;
    .num {
      color: #f23a3b;
    }
  }
  &.confirmed {
    background-color: #fdf1f1;
    .num {
      color: #cc1e1e;
    }
  }
  &.maybe {
    background-color: #fcf4f0;
    .num {
      color: #ca3f81;
    }
  }
  &.serious {
    background-color: #faf2f6;
    .num {
      color: #f05926;
    }
  }
  &.heal {
    background-color: #f1f8f4;
    .num {
      color: #178b50;
    }
  }
  &.dead {
    background-color: #f3f6f8;
    .num {
      color: #4e5a65;
    }
  }
  &.jwsr {
    background-color: #f3f6f0;
    .num {
      color: #fe6b23;
    }
  }
  &.asym {
    background-color: #f3f6e9;
    .num {
      color: #fe9986;
    }
  }
`;
export default function Block({ data }) {
  const { type, title, num, cNum } = data;
  return (
    <StyledWrapper key={type} className={`block ${type}`}>
      <div className="compare">
        较上日 <span className="num">{cNum < 0 ? cNum : `+${cNum}`}</span>
      </div>
      <div className="num">{num}</div>
      <div className="title">{title}</div>
    </StyledWrapper>
  );
}
