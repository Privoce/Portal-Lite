// import { useState } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';
// TO DO:  check数据本地化
const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(22, 22, 22, 0.2);
  .panel {
    background-color: #fff;
    padding: 0.1rem 0.14rem;
    border: 1px solid #eee;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 99;
    max-height: 90%;
    overflow: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    .calendars {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0.08rem 0.1rem;
      z-index: 99;
      .calendar {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 0.2rem;
        width: 2.5rem;
        padding-bottom: 0.2rem;

        &:not(:last-child) {
          border-bottom: 1px dashed #eee;
        }
        .top {
          display: flex;
          align-items: center;
          > .title {
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            padding: 0.05rem 0.1rem;
            border-radius: 4px;
            white-space: nowrap;
            .check {
              position: relative;
              width: 0.2rem;
              height: 0.2rem;
              border-radius: 50%;
              border: 1px solid #fff;
              margin-right: 0.1rem;
              &:before {
                content: '';
                transform: rotateX(180deg);
                position: absolute;
                top: -0.02rem;
                font-size: 0.22rem;
                color: #eee;
              }
              &.checked:before {
                content: 'ヘ';
              }
            }
            .txt {
              font-weight: 800;
              line-height: 1.4;
              font-size: 0.18rem;
            }
          }
          .flag {
            margin-left: 0.1rem;
            font-size: 0.08rem;
            padding: 0.03rem 0.06rem;
            border-radius: 4px;
            background: #aaa;
            color: #fff;
            white-space: nowrap;
          }
        }

        > .desc {
          line-height: 1.4;
          margin-top: 0.1rem;
          font-size: 0.12rem;
          color: #999;
        }
      }
    }
  }
`;
export default function AddEvent({ name, calendars = [], updateCalendars }) {
  console.log({ calendars });
  const toggleCheck = ({ currentTarget }) => {
    const { cid } = currentTarget.dataset;
    console.log({ cid });
    let tmps = calendars.map((c) => {
      if (c.id == cid) {
        c.checked = !c.checked;
      }
      return c;
    });
    console.log({ tmps });
    updateCalendars([...tmps]);
  };
  return createPortal(
    <StyledWrapper>
      <div className="panel">
        <ul className="calendars">
          {calendars
            .sort((a, b) => Number(b.primary || false) - Number(a.primary || false))
            .map((c) => {
              const {
                summary,
                description,
                id,
                backgroundColor,
                foregroundColor,
                readOnly,
                checked
              } = c;
              return (
                <li className="calendar" key={id}>
                  <div className="top">
                    <h3
                      data-cid={id}
                      onClick={toggleCheck}
                      className={`title ${readOnly ? 'readonly' : ''}`}
                      style={{ backgroundColor, color: foregroundColor }}
                    >
                      <i
                        style={{ backgroundColor }}
                        className={`check ${checked ? 'checked' : ''}`}
                      ></i>
                      <span className="txt">{summary}</span>
                    </h3>
                    {readOnly && <i className="flag">Read Only</i>}
                  </div>
                  {description && <p className="desc">{description}</p>}
                </li>
              );
            })}
        </ul>
      </div>
      {/* )} */}
    </StyledWrapper>,
    document.querySelector(`#widget-${name}-setting`)
  );
}
