// import { Link } from 'react-router-dom';
import { useState } from 'react';
import StyledWrapper from './styled';
import BSearch from '../../component/BaiduSearch';
import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';
import { useContextMenu } from '../../hooks';
const LOGOS = [
  {
    title: '微博',
    icon: './logos/wb.png',
    themeColor: '#FFD902',
    url: 'https://m.weibo.cn/'
  },
  {
    title: '抖音',
    icon: './logos/dy.png',
    themeColor: '#888',
    url: '//douyin.com'
  },
  {
    title: '爱奇艺',
    icon: './logos/iqy.png',
    themeColor: '#07D302',
    url: 'http://iqiyi.com/'
  },
  {
    title: '淘宝',
    icon: './logos/tb.png',
    themeColor: '#Ff9',
    url: 'http://taobao.com/'
  },
  {
    title: '知乎',
    icon: './logos/zh.png',
    themeColor: '#1787fc',
    url: '//zhichu.com'
  },
  {
    title: '微信',
    icon: './logos/wx.png',
    themeColor: '#fff',
    url: '//weixin.com'
  },
  {
    title: '测试标题超长的情况啦啦啦啦',
    icon: 'https://swiperjs.com/i/favicon.png',
    themeColor: '#898989',
    url: 'https://swiperjs.com/'
  }
];
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const { menuVisible, position, showMenu } = useContextMenu(false);
  const toggleModalVisible = (evt) => {
    evt.preventDefault();
    setModalVisible((prev) => !prev);
  };
  return (
    <StyledWrapper>
      <Account />
      {menuVisible && <ContextMenu {...position} />}
      <div className="search">
        <BSearch />
      </div>
      <div className="widgets">
        {LOGOS.map((logo) => {
          return <Widget key={logo.title} showMenu={showMenu} {...logo} />;
        })}
        <Widget add onClick={toggleModalVisible} />
      </div>
      <button onClick={toggleModalVisible} className="add_widget">
        添加小组件
      </button>
      <Modal visible={modalVisible} toggleVisible={toggleModalVisible} />
    </StyledWrapper>
  );
}
