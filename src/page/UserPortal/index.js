import { useEffect, useState } from 'react';
import StyledWrapper from './styled';
import { useParams } from 'react-router-dom';
// import { useLanguage } from 'uselanguage';
import WidgetSection from './WidgetSection';
import Footer from '../../component/Footer';
import Loading from '../../component/Loading';
import BackHome from './BackHome';

const getFormatedData = (data, key) => {
  let result = { keys: null, data: null };
  if (key) {
    result.keys = [key];
    result.data = data;
  } else {
    result.keys = data.widgets?.local || [];
    result.data = data;
  }
  return result;
};
export default function UserPortal() {
  // const { language } = useLanguage();
  const [errorTip, setErrorTip] = useState('');
  const { uid, widget = null } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    const getUserData = async () => {
      const resp = await fetch(
        `${process.env.REACT_APP_SERVICE_DOMAIN}/service/authing/${uid}/udf`
      );
      const { code, data, msg } = await resp.json();
      if (code != 0) {
        setErrorTip(msg);
        return;
      }
      let formated = getFormatedData(data, widget);

      setData(formated);
      console.log({ formated });
      setLoading(false);
    };

    getUserData();
  }, []);
  if (errorTip) return errorTip;
  if (loading) return <Loading />;
  const { keys, data: allData } = data;
  console.log({ keys, allData, widget });
  return (
    <StyledWrapper>
      <h2 className="title">
        {`${allData.common?.user?.username}'s`} Personal {widget ? `Widget` : `Portal`}
      </h2>
      <WidgetSection keys={keys} data={allData} single={!!widget} />
      {widget && <BackHome path={`/p/${uid}`} />}
      <Footer />
    </StyledWrapper>
  );
}
