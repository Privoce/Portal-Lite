// import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.div`
  width: 4.87rem;
  .container {
    position: relative;
    width: 100%;
    height: 2.34rem;
    background: #ffffff;
    box-shadow: 0rem 0.02rem 0.06rem 0rem rgba(213, 213, 213, 0.5);
    border-radius: 0.05rem;
    border: 0.01rem solid #e8e8e8;
    overflow: hidden;
    padding: 0.14rem 0.16rem;
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 400;
    color: #666666;
    line-height: 0.2rem;
    margin-top: 0.18rem;
  }
  &.l .container {
    height: 4.68rem;
  }
  &.compact .container {
    padding: 0;
    overflow: scroll;
  }
`;
export default function WidgetWrapper({
  title = '组件标题',
  compact,
  size = 'm',
  children = null
}) {
  console.log({ compact });
  return (
    <StyledWrapper className={`${compact ? 'compact' : ''} ${size}`}>
      <div className="container">{children}</div>
      <h2 className="title">{title}</h2>
    </StyledWrapper>
  );
}
