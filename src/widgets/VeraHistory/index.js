// import { useRef, useEffect, useState } from 'react';
// import { RiRefreshLine } from 'react-icons/ri';
// import { useWidgetSettings } from '../../hooks';
// import { formatDistanceToNowStrict } from 'date-fns';
import StyledWrapper from './styled';
import HistoryItem from './HistoryItem';
import useHistory from './useHistory';
export default function VeraHistory({ lang }) {
  // const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  const { data: list, error, loading } = useHistory('Tristan');
  // const [list, setList] = useState([
  //   {
  //     peer: 'c548144f-6ddf-4bc5-8f54-9c5c44089fa1',
  //     title: 'My Portal',
  //     url: 'https://github.com/ElizabethHudnott/peerjs-groups',
  //     timestamp: new Date().getTime(),
  //     participants: ['Tristan', 'Suhan']
  //   }
  // ]);
  console.log({ list });
  if (error) return 'error';
  return (
    <>
      <StyledWrapper>
        {loading ? (
          <div className="loading">{lang.fetching}</div>
        ) : (
          <ul className="list">
            {list.map((item) => {
              return <HistoryItem key={item.peer} data={item} />;
            })}
          </ul>
        )}
      </StyledWrapper>
    </>
  );
}
