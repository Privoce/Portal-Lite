// import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .input {
    resize: none;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 0.13rem;
    font-weight: 400;
    /* color: #999999; */
    line-height: 0.18rem;
    padding: 0.22rem 0.25rem;
  }
  .btn {
    position: absolute;
    bottom: 0.15rem;
    left: 50%;
    transform: translateX(-50%);

    background: #2fd132;
    border-radius: 0.03rem;
    padding: 0.04rem 0.2rem;
    font-size: 0.12rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 0.17rem;
  }
`;
export default function YinNote() {
  const handleSave = () => {
    alert('暂未开发~');
  };
  return (
    <StyledWrapper>
      <textarea
        className="input"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="在此输入文字，快速记录"
      ></textarea>
      <button className="btn" onClick={handleSave}>
        保存到印象笔记
      </button>
    </StyledWrapper>
  );
}
