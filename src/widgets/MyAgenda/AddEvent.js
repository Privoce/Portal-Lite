import { useState } from 'react';
import styled from 'styled-components';
import IconAdd from '../Common/Icons/Add';

const StyledWrapper = styled.div`
  position: relative;
  .add {
    svg {
      transition: all 0.3s;
      width: 0.28rem;
      height: 0.28rem;
      transform-origin: center;
    }
    &.expand svg {
      transform: rotate(45deg);
    }
  }

  .panel {
    background-color: #fff;
    padding: 0.1rem 0.14rem;
    border: 1px solid #eee;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 99;
    position: absolute;
    right: 0;
    top: 0.5rem;
    transform: translateX(50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .calendar {
      font-size: 0.16rem;
      color: #999;
    }
    .input {
      margin: 0.1rem 0;
      border: 1px solid #eee;
      font-size: 0.14rem;
      min-height: 1.5rem;
      padding: 0.05rem;
    }
    .submit {
      border-radius: 5px;
      margin: 0.14rem 0;
      color: #fff;
      background-color: #5c4ddf;
      font-size: 0.16rem;
      padding: 0.04rem 0.15rem;
      &[disabled] {
        background-color: #aaa;
      }
    }
  }
`;
export default function AddEvent({ calendar = null, addEvent }) {
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const handleAddClick = () => {
    setPanelVisible((prev) => !prev);
  };
  const handleInputChange = (evt) => {
    const { value } = evt.target;
    setInput(value);
  };
  const handleSubmitEvent = async () => {
    setPending(true);
    let {
      success,
      msg,
      data: { id }
    } = await addEvent(input);
    if (!success) {
      alert(msg);
    }
    setPending(false);
    setPanelVisible(false);
    setInput('');
    document.querySelector(`#e-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // console.log({ add_event });
  };
  return (
    <StyledWrapper>
      <button className={`add ${panelVisible ? 'expand' : ''}`} onClick={handleAddClick}>
        <IconAdd color="#5c4ddf" />
      </button>
      {panelVisible && (
        <div className="panel">
          <textarea
            className="input"
            onChange={handleInputChange}
            value={input}
            cols="30"
            rows="10"
          ></textarea>
          {calendar && (
            <h3 className="calendar" style={{ color: calendar.backgroundColor }}>
              Add to: {calendar.summary}
            </h3>
          )}
          {/* <select data-type="calendarId" onChange={handleInputChange}>
            {calendars.map((c) => {
              const { id, summary } = c;
              return (
                <option key={id} value={id} selected={input.calendarId == id}>
                  {summary}
                </option>
              );
            })}
          </select> */}

          <button
            disabled={!input || !calendar || pending}
            className="submit"
            onClick={handleSubmitEvent}
          >
            提交
          </button>
        </div>
      )}
    </StyledWrapper>
  );
}
