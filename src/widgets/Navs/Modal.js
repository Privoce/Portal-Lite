import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import uniqolor from 'uniqolor';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { validateUrl } from '../../util';
import SwiperTabs from './SwiperTabs';
import { useWidgetSettings } from '../../hooks';

import IconClose from '../../asset/img/icon.close.png';

const modalRoot = document.querySelector('#modal-root');
const StyledWrapper = styled.section`
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    position: relative;
    background: #fff;
    border-radius: 0.04rem;
    /* padding: 0.7rem 0.25rem 0.35rem 0.25rem; */
    padding: 0.7rem 0.25rem 0 0.25rem;
    width: 8.16rem;

    .add {
      padding: 0 0.2rem;
      padding-bottom: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .title {
        width: 1.42rem;
        margin-right: 0.44rem;
      }
      .url {
        width: 3.24rem;
        margin-right: 0.44rem;
      }
      .url,
      .title {
        margin-bottom: 0.1rem;
        font-size: 0.16rem;
        font-weight: 400;
        color: #080808;
        line-height: 0.22rem;
        padding: 0.1rem 0.08rem;
        border-radius: 0.04rem;
        border: 0.01rem solid #e0e0e0;
        &::placeholder {
          font-size: 0.14rem;
        }
      }
      .btn {
        display: inherit;
        position: relative;
        margin-bottom: 0.1rem;
        button {
          padding: 0.1rem 0.5rem;
          background: #4e6df2;
          border-radius: 0.04rem;
          font-size: 0.16rem;
          font-weight: 500;
          color: #ffffff;
          line-height: 0.22rem;
          white-space: nowrap;
        }
        .tip {
          position: absolute;
          left: 0;
          bottom: -0.26rem;
          font-size: 0.13rem;
          font-weight: 400;
          color: #ff2323;
          line-height: 0.18rem;
        }
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      top: 0.16rem;
      right: 0.16rem;
      width: 0.16rem;
      height: 0.16rem;
    }
    @media screen and (max-width: 414px) {
      width: 5rem;
      .add {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;
// let other_params = {};
export default function Modal({ resetModalVisible, addApp, widgetName = '' }) {
  const { getWidgetSetting } = useWidgetSettings();
  const [tip, setTip] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const modal = useRef(null);

  useEffect(() => {
    let modalEle = modal || modal.current;
    if (modalEle) {
      disableBodyScroll(modalEle);
    }
    return () => {
      enableBodyScroll(modalEle);
    };
  }, []);
  const handleSubmit = () => {
    console.log({ title });
    let finalUrl = url;
    if (!title) {
      setTip('名称不能为空');
      return;
    }
    if (!url) {
      setTip('地址不能为空');
      return;
    }
    if (!url.startsWith('http')) {
      finalUrl = `//${url}`;
    }
    if (!validateUrl(finalUrl)) {
      setTip('请输入正确的地址');
      return;
    }
    const { color } = uniqolor.random({
      saturation: 100,
      lightness: [70, 80]
    });
    let { success, msg } = addApp({
      title,
      url: finalUrl,
      themeColor: color
    });
    if (!success) {
      alert(msg);
      return;
    }
    resetModalVisible();
  };
  const handleInputChange = (evt) => {
    console.log({ evt });
    let { value } = evt.target;
    if (evt.target.className == 'title') {
      setTitle(value);
    } else {
      setUrl(value);
    }
  };
  const updateCurrSelect = (item) => {
    console.log({ item });
    // const { title: itemTitle, url: itemUrl, ...rest } = item;
    let { success, msg } = addApp(item);
    if (!success) {
      alert(msg);
      return;
    }
    resetModalVisible();
  };
  let localActiveTab = getWidgetSetting(widgetName, 'swiper_tab');
  return (
    <ModalWrapper ref={modal}>
      <StyledWrapper>
        <div className="modal">
          <div className="add">
            <input
              placeholder="名称"
              onChange={handleInputChange}
              value={title}
              className="title"
            />
            <input placeholder="地址" onChange={handleInputChange} value={url} className="url" />
            <div className="btn">
              <button onClick={handleSubmit}>添 加</button>
              {tip && <div className="tip">{tip}</div>}
            </div>
          </div>
          <SwiperTabs
            handleSelect={updateCurrSelect}
            widgetName={widgetName}
            activeTab={localActiveTab}
          />
          <img src={IconClose} onClick={resetModalVisible} className="close" />
        </div>
      </StyledWrapper>
    </ModalWrapper>
  );
}

const ModalWrapper = ({ children }) => {
  return createPortal(children, modalRoot);
};
