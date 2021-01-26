// import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ForkMeOnGithub from 'fork-me-on-github';
import StyledWrapper from './styled';
import Loading from '../../component/Loading';
import Footer from './Footer';
// import Account from '../../component/Account';

const Feedback = lazy(() =>
  import(/* webpackChunkName: "block.feedback" */ '../../component/Feedback')
);

const WidgetSection = lazy(() => import(/* webpackChunkName: "block.widgets" */ './WidgetSection'));

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <ForkMeOnGithub
        repo="https://github.com/Privoce/Portal-Lite-China"
        colorBackground="#4e6ef3"
        colorOctocat="white"
        side="left"
      />
      <StyledWrapper>
        <Feedback />
        {/* <Account /> */}

        <Suspense fallback={<Loading tip="小组件模块加载中..." />}>
          {/* <DndProvider backend={HTML5Backend}> */}
          <WidgetSection />
          {/* </DndProvider> */}
        </Suspense>
      </StyledWrapper>
      <Footer />
    </Suspense>
  );
}
