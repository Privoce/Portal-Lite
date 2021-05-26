// import { useState } from 'react';
// import { format } from 'timeago.js';
// import { format } from 'date-fns';
import styled from 'styled-components';
// import { IoIosMic } from 'react-icons/io';
import { IoIosAdd } from 'react-icons/io';
import useRoomList from './useRoomList';
import StyledTip from './StyledTip';
const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-template-rows: auto;
  grid-column-gap: 0.3rem;
  grid-row-gap: 0.15rem;

  .room {
    font-size: 0.16rem;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0.15rem;
    height: 100%;
    width: 100%;

    padding: 0.15rem 0.1rem;
    margin-bottom: 0.15rem;
    position: relative;
    display: flex;
    &.active:after {
      position: absolute;
      right: -5px;
      top: 0;
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: green;
    }
    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      .name {
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 0.2rem;
        font-weight: 800;
        margin-bottom: 0.08rem;
      }
      .link {
        text-decoration: underline;
        font-size: 0.14rem;
        color: #666;
        line-height: 1.5;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .time {
        margin: 0.14rem 0;
        font-size: 0.1rem;
      }
      .participants {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 0.14rem;
        color: #999;
        height: 1rem;
        overflow-y: scroll;
        .user {
          display: flex;
          align-items: center;
          padding: 0.05rem;
          border-radius: 2px;
          border: 1px solid #eee;
          &:not(:last-child) {
            margin-bottom: 0.08rem;
          }
        }
      }
      .btn {
        background: #606368;
        color: #fff;
        padding: 0.1rem 0.15rem;
      }
    }
    &.add {
      cursor: pointer;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function RoomList({ username, lang, toggleAddPopup }) {
  const { data, error, loading } = useRoomList(username);

  console.log('rooms', { data });
  const handleLinkClick = (rid) => {
    console.log('link clicked', rid);
    document.dispatchEvent(new CustomEvent('VERA_ROOM_EVENT', { detail: { rid } }));
  };

  if (loading || !data) return <StyledTip>{lang.fetching}</StyledTip>;
  if (error) return <StyledTip>error</StyledTip>;
  return (
    <StyledList>
      {data.map((r) => {
        const { name, id, link, active } = r;
        return (
          <div className={`room ${active ? 'active' : ''}`} key={id}>
            <div className="content">
              <div className="name">{name}</div>
              <a
                href={link}
                className="link"
                target="_blank"
                onClick={handleLinkClick.bind(null, id)}
              >
                {id}
              </a>
            </div>
          </div>
        );
      })}
      <div className="room add" onClick={toggleAddPopup}>
        <IoIosAdd size={50} />
      </div>
    </StyledList>
  );
}
