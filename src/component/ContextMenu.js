import styled from 'styled-components';

const StyledMenu = styled.ul`
  z-index: 999;
  position: fixed;
  background: #ffffff;
  box-shadow: 0rem 0.08rem 0.3rem 0rem #ececec, 0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5);
  border-radius: 0.03rem;
  border: 0.01rem solid #e8e8e8;
  padding: 0.12rem 0.16rem;
  list-style: none;
  margin: 0;
  .item {
    cursor: pointer;
    font-size: 0.14rem;
    font-weight: 400;
    color: #333333;
    line-height: 0.2rem;
    &:not(:last-child) {
      margin-bottom: 0.12rem;
    }
  }
`;

const ContextMenu = ({ left = 0, top = 0 }) => {
  return (
    <StyledMenu style={{ left, top }}>
      <li className="item">删除</li>
      <li className="item">排序</li>
      <li className="item">编辑</li>
      <li className="item">新标签页打开</li>
    </StyledMenu>
  );
};
export default ContextMenu;
