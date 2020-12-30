import { createPortal } from 'react-dom';
import styled from 'styled-components';
// import Widget from '../component/Widget';
import SwiperTabs from '../component/SwiperTabs';

import IconClose from '../asset/img/icon.close.png';

const modalRoot = document.querySelector('#modal-root');
const StyledWrapper = styled.section`
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
    padding: 0.7rem 0.25rem 0.35rem 0.25rem;
    width: 8.16rem;

    .add {
      padding: 0 0.2rem;
      padding-bottom: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .name {
        width: 1.42rem;
        margin-right: 0.44rem;
      }
      .url {
        width: 3.24rem;
        margin-right: 0.44rem;
      }
      .url,
      .name {
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

export default function Modal({ visible = false, toggleVisible = null }) {
  console.log({ visible });
  return visible ? (
    <ModalWrapper>
      <StyledWrapper>
        <div className="modal ">
          <div className="add">
            <input placeholder="名称" className="name" />
            <input placeholder="地址" className="url" />
            <div className="btn">
              <button>添 加</button>
              <div className="tip">格式有误</div>
            </div>
          </div>
          <SwiperTabs />
          <img src={IconClose} onClick={toggleVisible} className="close" />
        </div>
      </StyledWrapper>
    </ModalWrapper>
  ) : null;
}

const ModalWrapper = ({ children }) => {
  return createPortal(children, modalRoot);
};
