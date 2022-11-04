import { useEffect, useState } from 'react';
import StyledWrapper from './styled';
import { useParams } from 'react-router-dom';
// import { useLanguage } from 'uselanguage';
import WidgetDetail from './WidgetDetail';
import ErrorTip from './ErrorTip';
import Footer from '../../component/Footer';
import Loading from '../../component/Loading';
import BackHome from './BackHome';

const getFormatedData = (data, key) => {
  let result = { key: null, data: null };
  result.key = key;
  result.data = data;
  return result;
};
export default function PortalWidget() {
  // const { language } = useLanguage();
  const [errorTip, setErrorTip] = useState('');
  const { username, widget = null } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const resp = await fetch(
        `${import.meta.env.VITE_SERVICE_DOMAIN}/service/authing/${username}/udf`
      );
      const { code, data, msg } = await resp.json();
      if (code != 0) {
        setErrorTip(msg);
        return;
      }

      let formated = getFormatedData(data, widget);
      setData(formated);
      setLoading(false);
    };
    getUserData();
  }, [widget, username]);

  if (errorTip) return <ErrorTip tip={errorTip} />;
  if (loading) return <Loading />;
  const { key, data: allData } = data;
  return (
    <StyledWrapper>
      <h2 className="title">{`${allData.common?.user?.username}'s`} Personal Widget</h2>
      <WidgetDetail widgetKey={key} data={allData[key]} />
      <BackHome path={`/p/${username}`} />
      <Footer />
    </StyledWrapper>
  );
}
