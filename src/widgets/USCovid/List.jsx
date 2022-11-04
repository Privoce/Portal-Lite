import React from 'react';
import IconClose from '../Common/Icons/Close';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: overlay;
  height: 100%;
  width: 100%;
  padding: 0.1rem 0.4rem;
  padding-top: 0;
  background-color: #fff;
  user-select: none;
  > .table {
    position: relative;
    width: 100%;
    text-align: left;
    thead {
      position: relative;
      z-index: 8;
      tr {
        th {
          border-bottom: 1px solid #ccc;

          background: #fff;
          position: sticky;
          top: 0;
          font-size: 0.24rem;
          padding: 0.1rem 0;
        }
      }
    }
    tbody tr {
      &.expandable {
        cursor: pointer;
        > .name {
          /* z-index: 8; */
          position: relative;
          &:before {
            position: absolute;
            left: -0.18rem;
            content: '⬇️';
          }
        }
        &.expand {
          > .name:before {
            content: '⬆️';
          }
        }
      }
      > td {
        font-size: 0.14rem;
        padding: 0.06rem 0.05rem;
      }
      &.city {
        &.hidden {
          display: none;
        }
        td {
          font-size: 0.12rem;
          color: #333;
          &.name {
            padding-left: 0.08rem;
          }
        }
      }
    }
  }
  .close_icon {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
  }
`;
export default function List({ data, toggleListVisible }) {
  const toggleCityVisible = ({ target, currentTarget }) => {
    console.log({ target, currentTarget });
    if (!currentTarget.classList.contains('expandable')) return;
    currentTarget.classList.toggle('expand');
    let ele = currentTarget.nextSibling;

    do {
      console.log({ ele });
      if (ele.nodeType === 3) continue; // text node
      if (ele.classList.contains('city')) {
        ele.classList.toggle('hidden');
      } else {
        break;
      }
    } while ((ele = ele.nextSibling));
  };
  return (
    <StyledWrapper>
      <table className="table">
        <thead>
          <tr>
            <th>省份</th>
            <th>现存确诊</th>
            <th>累计确诊</th>
            <th>现存无症状</th>
            <th>治愈</th>
            <th>死亡</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const { name, econNum, value, asymptomNum, cureNum, deathNum, city } = item;
            let hasCityData = city && city.length;
            return (
              <>
                <tr
                  key={name}
                  className={hasCityData ? 'expandable' : ''}
                  onClick={toggleCityVisible}
                >
                  <td className="name">{name}</td>
                  <td>{econNum}</td>
                  <td>{value}</td>
                  <td>{asymptomNum}</td>
                  <td>{cureNum}</td>
                  <td>{deathNum}</td>
                </tr>
                {hasCityData
                  ? city.map((itm) => {
                      const { name, conNum, asymptomNum, cureNum, deathNum } = itm;
                      return (
                        <tr key={name} className={'city hidden'}>
                          <td className="name">{name}</td>
                          <td>--</td>
                          <td>{conNum}</td>
                          <td>{asymptomNum}</td>
                          <td>{cureNum}</td>
                          <td>{deathNum}</td>
                        </tr>
                      );
                    })
                  : null}
              </>
            );
          })}
        </tbody>
      </table>
      <IconClose className="close_icon" onClick={toggleListVisible} />
    </StyledWrapper>
  );
}
