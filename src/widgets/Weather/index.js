import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Loading from '../Common/Loading';

const StyledWrapper = styled.div`
  width: 100% !important;
  height: 100% !important;
  #he-plugin-standard {
    width: 100% !important;
    height: 100% !important;
    .wv-v-h-row {
      display: flex;
      position: relative;
      /* justify-content: center; */
      align-items: center;
      .wv-v-h-location {
        position: absolute;
        top: 5px;
        left: 0;
        width: 100%;
      }
    }
  }
`;
export default function Weather() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.WIDGET = {
      CONFIG: {
        layout: 1,
        // width: '390',
        // height: '188',
        background: 1,
        dataColor: 'FFFFFF',
        language: 'zh',
        key: 'cb838cfcaf634a45a7151df4dd9d998f'
      }
    };
    // https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0
    let he_script = document.createElement('script');
    he_script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(he_script, s);
    he_script.onload = () => {
      setLoading(false);
      setTimeout(() => {
        // let heEle = document.querySelector('#he-plugin-standard');
        // heEle.style.width = '100%';
        // heEle.style.height = '234px';
        // console.log({ heEle });
      }, 2000);
    };
  }, []);
  if (loading) return <Loading />;
  return (
    <StyledWrapper>
      <div id="he-plugin-standard"></div>
    </StyledWrapper>
  );
}
