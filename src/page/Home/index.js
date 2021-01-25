// import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import StyledWrapper from './styled';
import Loading from '../../component/Loading';

// import Account from '../../component/Account';

const Feedback = lazy(() => import('../../component/Feedback'));

const WidgetSection = lazy(() => import('./WidgetSection'));

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <StyledWrapper>
        <Feedback />
        {/* <Account /> */}

        <Suspense fallback={<Loading tip="小组件模块加载中..." />}>
          {/* <DndProvider backend={HTML5Backend}> */}
          <WidgetSection />
          {/* </DndProvider> */}
        </Suspense>
      </StyledWrapper>
    </Suspense>
  );
}
