import { useState, useEffect } from 'react';
// import { format } from 'timeago.js';
// import { format } from 'date-fns';
import styled from 'styled-components';
// import { IoIosMic } from 'react-icons/io';
import { RiAddFill } from 'react-icons/ri';
import useRoomList from './useRoomList';
import StyledTip from './StyledTip';
const StyledList = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 0.2rem;
  .col{
    height: 100%;
    display: flex;
    flex-direction: column;
    padding:.14rem .12rem;
    >.title{
      font-weight: 800;
      color:#000;
      margin-bottom: .14rem;
    }
    .box{
      padding:.15rem;
      border-radius: .1rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      &:not(:last-child){
        margin-bottom: .14rem;
      }
    }
  }
  .rooms{
    background-color:  #f3f3f3;
    flex: 1;
    .room{
      position: relative;
      cursor: pointer;
      font-size: .22rem;
      &.curr{
        background-color: #333;
        color:#f3f3f3;
      }
      &.active:after{
        content: "";
        display: block;
        width:8px;
        height: 8px;
        border-radius: 50%;
        background-color: green;
        position: absolute;
        top:5px;
        right:5px;
      }
    }
  }
  .windows{
    flex:2;
    .window{
      padding:0 .1rem;
      >.title{
        display: flex;
        justify-content: space-between;
        padding-top:0.2rem;
        font-size: .22rem;
        border-bottom: 1px solid #eee;
    padding-bottom: 0.1rem;
        .co{
          padding:.05rem;
          border-radius: .1rem;
          background-color:  rgb(117, 217, 157);
          color:#f3f3f3;
;
        }
      }
      .tabs{
        display: flex;
        flex-direction: column;
        padding:.1rem 0;
        .tab{
          margin-bottom:.1rem;
          padding-top:.1rem;
          display: flex;
          align-items: center;
          .icon{
            width:.2rem;
            height:.2rem;
            margin-right: .1rem;
          }

        }
      }
    }
    .add{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default function RoomList({ username, lang = {}, toggleAddPopup }) {
  const [currRoom, setCurrRoom] = useState(null)
  const { data: roomList, error, loading } = useRoomList(username);

  useEffect(() => {
    if (!loading) {
      const [firstRoom] = roomList;
      setCurrRoom(firstRoom)
    }
  }, [loading, roomList]);
  const handleRoomSelect = (rid) => {
    let tmp = roomList.find(r => r.id == rid);
    console.log({ rid, tmp });
    setCurrRoom(tmp)
  }
  const handleCoBrowse = (evt) => {
    const { idx } = evt.target.dataset
    // 把用户信息同步到vera扩展
    const rid = currRoom.id;
    const urls = currRoom.windows[idx].tabs.map(({ url }, idx) => {
      if (idx == 0) {
        return `https://nicegoodthings.com/transfer/r/${rid}/${encodeURIComponent(url)}?extid=${'ccegbnlnelhgaefimiaklaindffpfcmh'
          }`
      }

      return url

    });
    console.log({ urls });
    document.dispatchEvent(new CustomEvent('VERA_ROOM_NEW_WINDOW_EVENT', { detail: { urls } }));
  }
  const handleNewWindow = () => {
    document.dispatchEvent(new CustomEvent('VERA_ROOM_NEW_WINDOW_EVENT', { detail: { urls: [] } }));
  }
  if (loading || !roomList) return <StyledTip>{lang.fetching}</StyledTip>;
  if (error) return <StyledTip>error</StyledTip>;
  console.log({ roomList, currRoom });
  return (
    <StyledList>
      <div className="col rooms">
        <h2 className="title">Room</h2>
        {roomList.map(r => {
          return <div onClick={handleRoomSelect.bind(null, r.id)} key={r.id} className={`box room ${currRoom?.id == r.id ? 'curr' : ''} ${r.active ? 'active' : ''}`}>
            {r.name}
          </div>
        })}
        <button className="box add" onClick={toggleAddPopup}>
          <RiAddFill size={20} />
        </button>
      </div>
      {currRoom && <div className="col windows">
        <h2 className="title">Window</h2>
        {currRoom.windows.map((w, idx) => {
          const { tabs } = w;
          return <div key={w.id} className="box window">
            <h3 className="title"><span>{w.title}</span><button data-idx={idx} onClick={handleCoBrowse} className="co">Co-Browse</button></h3>
            <ul className="tabs">
              {tabs.map(t => {
                const { id, title, icon } = t;
                return <li className="tab" key={id}>
                  <img className="icon" src={icon} alt="icon" />
                  <span className="title">{title}</span>
                </li>
              })}

            </ul>
          </div>
        })}
        <button onClick={handleNewWindow} className="box add">
          <RiAddFill size={20} />
        </button>
      </div>}
    </StyledList>
  );
}