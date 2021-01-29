import { lazy, Suspense } from 'react';
import Navs from './widgets/Navs/SwiperTabs/nav_data';
import AllTools from './widgets/Navs/SwiperTabs/tool_data';
import Loading from './component/Loading';
const Searchs = lazy(() => import(/* webpackChunkName: "widget.searchs" */ './widgets/Searchs'));
const NavBlock = lazy(() => import(/* webpackChunkName: "widget.navs" */ './widgets/Navs'));
const WeiboHot = lazy(() =>
  import(/* webpackChunkName: "widget.weibo.hot" */ './widgets/WeiboHot')
);
const MPDaily = lazy(() => import(/* webpackChunkName: "widget.mp.daily" */ './widgets/MPDaily'));
const Weather = lazy(() => import(/* webpackChunkName: "widget.weather" */ './widgets/Weather'));
const Covid = lazy(() => import(/* webpackChunkName: "widget.covid" */ './widgets/Covid'));
const USCovid = lazy(() => import(/* webpackChunkName: "widget.uscovid" */ './widgets/USCovid'));
const TimezoneClock = lazy(() =>
  import(/* webpackChunkName: "widget.timezone.clock" */ './widgets/TimezoneClock')
);
const GithubTrending = lazy(() =>
  import(/* webpackChunkName: "widget.github.trend" */ './widgets/GithubTrending')
);
const GithubDashboard = lazy(() =>
  import(/* webpackChunkName: "widget.github.repos" */ './widgets/GithubDashboard')
);
const ZhihuHot = lazy(() =>
  import(/* webpackChunkName: "widget.zhihu.hot" */ './widgets/ZhihuHot')
);
const DoubanHotTopics = lazy(() =>
  import(/* webpackChunkName: "widget.douban.topics" */ './widgets/DoubanHotTopics')
);
const YiYan = lazy(() => import(/* webpackChunkName: "widget.yiyan" */ './widgets/YiYan'));
const DailyShici = lazy(() =>
  import(/* webpackChunkName: "widget.daily.shici" */ './widgets/DailyShiCi')
);
const BingDailyPicture = lazy(() =>
  import(/* webpackChunkName: "widget.bing.pics" */ './widgets/BingDailyPicture')
);
const Calc = lazy(() => import(/* webpackChunkName: "widget.calc" */ './widgets/Calc'));
const YinNote = lazy(() => import(/* webpackChunkName: "widget.yin.note" */ './widgets/YinNote'));

const Webapps = Navs[0].items;
const Tools = AllTools[0].items;
const Widgets = {
  searchs: {
    type: 'search',
    title: '搜索引擎',
    description: '百度、谷歌、必应',
    compact: true,
    preset: true,
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <Searchs {...props} />
      </Suspense>
    ),
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.searchs.png'
  },
  navs: {
    type: 'nav',
    title: '导航',
    description: '页面导航集合地',
    compact: true,
    preset: true,
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <NavBlock {...props} />
      </Suspense>
    ),
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.navs.png'
  },
  'covid-info': {
    title: '🇨🇳 国内新冠疫情概况',
    description: '快速了解国内每日疫情概况',
    compact: true,
    preset: true,
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <Covid {...props} />
      </Suspense>
    ),
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.covid.data.png'
  },
  'us-covid-info': {
    title: '🇺🇸 美国新冠疫情概况',
    description: '快速了解美利坚每日疫情概况',
    compact: true,
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <USCovid {...props} />
      </Suspense>
    ),
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.usa.covid.png'
  },
  'wb-hot': {
    preset: true,
    title: '微博热搜',
    description: '微博实时热搜，你想了解的，都在这里！',
    defaultSize: 'large',
    sizes: ['middle', 'large'],
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <WeiboHot {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.weibo.png'
  },
  weather: {
    preset: true,
    title: '今日天气',
    description: '全方位，多角度，为您提供天气信息。',
    compact: true,
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <Weather {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.weather.png'
  },
  'timezone-clock': {
    title: '国际时钟',
    description: '便捷查看多个时区时间，最多支持添加三个。',
    compact: true,
    preset: true,
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <TimezoneClock {...props} />
      </Suspense>
    ),
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.world.clock.png'
  },
  yiyan: {
    title: '一言',
    description:
      '简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。 或是感动，或是开心，有或是单纯的回忆。',
    compact: true,
    // preset: true,
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <YiYan {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.yiyan.png'
  },

  'mp-daily-hot': {
    title: '公众号24小时热文',
    description: '公众号实时热文，你想了解的，都在这里！',
    sizes: ['middle', 'large'],
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <MPDaily {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.mp.png'
  },
  'daily-shici': {
    title: '今日诗词',
    description: '每天一句诗词，根据时间、地点、天气、事件智能推荐',
    compact: true,
    sizes: ['middle', 'large'],
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <DailyShici {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.daily.shici.png'
  },
  'zhihu-hot': {
    title: '知乎热搜榜',
    sizes: ['middle', 'large'],
    description: '知乎实时热搜，你想了解的，都在这里！',
    compact: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <ZhihuHot {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.zhihu.png'
  },
  'gh-dashboard': {
    title: 'Github个人仓库',
    sizes: ['middle', 'large'],
    description: '通过授权，展现您个人仓库列表，快速预览每个仓库的概况。',
    compact: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <GithubDashboard {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.github.repo.png'
  },

  'bing-daily-pic': {
    // preset: true,
    title: '必应壁纸',
    description: '快速浏览与下载必应高清壁纸',
    compact: true,
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <BingDailyPicture {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.bing.pics.png'
  },
  'douban-topic-hot': {
    // preset: true,
    title: '豆瓣24小时话题',
    description: '直达豆瓣24小时热门话题',
    // compact: true,
    // disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <DoubanHotTopics {...props} />
      </Suspense>
    ),
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.douban.topic.png'
  },

  'gh-trending': {
    title: 'Github趋势',
    description: 'GitHub趋势榜，有开发者和仓库两大分类，让您不再错过GitHub热门仓库',
    compact: true,
    sizes: ['middle', 'large'],
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <GithubTrending {...props} />
      </Suspense>
    ),
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.github.trending.png'
  },
  calc: {
    title: '计算器',
    description: '一个科学计算器',
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <Calc {...props} />
      </Suspense>
    ),
    defaultSize: 'large',
    sizes: ['middle', 'large'],
    disableScroll: true,
    compact: true,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.calc.png'
  },
  'yin-note': {
    title: '印象笔记',
    description: '快速录入印象笔记【暂未开发】',
    disableScroll: true,
    comp: (props = {}) => (
      <Suspense fallback={<Loading />}>
        <YinNote {...props} />
      </Suspense>
    ),
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.yinxiang.note.png'
  }
};

export { Webapps, Tools, Widgets };
