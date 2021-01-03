import styled from 'styled-components';
const StyledMenu = styled.ul`
  z-index: 999;
  position: fixed;
  background: #ffffff;

  box-shadow: 0rem 0.02rem 0.12rem 0rem rgba(153, 153, 153, 0.8);
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

const ContextMenu = ({ left = 0, top = 0, currApp = {}, removeApp }) => {
  const { url } = currApp;
  const handleRemove = () => {
    console.log({ currApp });
    removeApp(currApp);
  };
  const handleOpenNew = () => {
    window.open(url, '_blank');
  };
  const handleEdit = () => {
    alert('暂未开发..');
  };
  return (
    <StyledMenu style={{ left, top }}>
      <li className="item" onClick={handleRemove}>
        删除
      </li>
      <li className="item" onClick={handleEdit}>
        编辑
      </li>
      <li className="item" onClick={handleOpenNew}>
        新标签页打开
      </li>
    </StyledMenu>
  );
};
export default ContextMenu;
