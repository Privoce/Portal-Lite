import { useEffect, useState } from 'react';
import StyledWrapper from './styled';
import { useParams } from 'react-router-dom';
// import { useLanguage } from 'uselanguage';
import WidgetList from './WidgetList';
import ErrorTip from './ErrorTip';
import Footer from '../../component/Footer';
import Loading from '../../component/Loading';

const getFormatedData = (data) => {
  let shares = Object.keys(data).filter((key) => {
    return data[key].share;
  });
  // 可分享组件&用户选择组件做交集，可分享组件优先级高一些
  let keys = [...new Set([...shares, ...(data.widgets?.local || [])])];
  let result = { keys, data };
  return result;
};
export default function UserPortal() {
  // const { language } = useLanguage();
  const [errorTip, setErrorTip] = useState('');
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const resp = await fetch(
        `${process.env.REACT_APP_SERVICE_DOMAIN}/service/authing/${username}/udf`
      );
      const { code, data, msg } = await resp.json();
      if (code != 0) {
        setErrorTip(msg);
        return;
      }

      let formated = getFormatedData(data);
      setData({ ...formated });
      setLoading(false);
    };
    getUserData();
  }, [username]);

  if (errorTip) return <ErrorTip tip={errorTip} />;
  if (loading) return <Loading />;
  const { keys, data: allData } = data;
  console.log({ allData, keys });
  return (
    <StyledWrapper>
      <h2 className="title">{`${allData.common?.user?.username}'s`} Personal Portal</h2>
      <WidgetList keys={keys} data={allData} />
      <Footer />
    </StyledWrapper>
  );
}
