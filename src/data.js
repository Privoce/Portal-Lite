import Navs from './component/SwiperTabs/nav_data';
import AllTools from './component/SwiperTabs/tool_data';
import WeiboHot from './widgets/WeiboHot';
import MPDaily from './widgets/MPDaily';
import Weather from './widgets/Weather';
import Covid from './widgets/Covid';
import GithubTrending from './widgets/GithubTrending';
import GithubDashboard from './widgets/GithubDashboard';
import Calc from './widgets/Calc';
import YinNote from './widgets/YinNote';
import ZhihuHot from './widgets/ZhihuHot';
import DailyShici from './widgets/DailyShiCi';
const Webapps = Navs[0].items;
const Tools = AllTools[0].items;
const Widgets = {
  'covid-info': {
    title: '国内新冠疫情概况',
    description: '快速了解国内每日疫情概况',
    compact: true,
    preset: true,
    disableScroll: true,
    comp: <Covid />,
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.covid.data.png'
  },
  'wb-hot': {
    preset: true,
    title: '微博热搜',
    description: '微博实时热搜，你想了解的，都在这里！',
    comp: <WeiboHot />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.weibo.png'
  },
  'mp-daily-hot': {
    title: '公众号24小时热文',
    description: '公众号实时热文，你想了解的，都在这里！',
    comp: <MPDaily />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.mp.png'
  },
  'daily-shici': {
    title: '今日诗词',
    description: '每天一句诗词，根据时间、地点、天气、事件智能推荐',
    compact: true,
    comp: <DailyShici />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.zhihu.png',
    preset: true
  },
  'zhihu-hot': {
    title: '知乎热搜榜',
    description: '知乎实时热搜，你想了解的，都在这里！',
    compact: true,
    comp: <ZhihuHot />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.zhihu.png'
  },
  'gh-dashboard': {
    title: 'Github个人仓库',
    description: '通过授权，展现您个人仓库列表，快速预览每个仓库的概况。',
    compact: true,
    comp: <GithubDashboard />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.github.repo.png'
  },
  weather: {
    preset: true,
    title: '今日天气',
    description: '全方位，多角度，为您提供天气信息。',
    compact: true,
    disableScroll: true,
    comp: <Weather />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.weather.png'
  },
  'gh-trending': {
    title: 'Github趋势',
    description: 'GitHub趋势榜，有开发者和仓库两大分类，让您不再错过GitHub热门仓库',
    compact: true,
    comp: <GithubTrending />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.github.trending.png'
  },
  calc: {
    title: '计算器',
    description: '一个科学计算器',
    comp: <Calc />,
    disableScroll: true,
    compact: true,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.calc.png'
  },
  'yin-note': {
    title: '印象笔记',
    description: '快速录入印象笔记【暂未开发】',
    disableScroll: true,
    comp: <YinNote />,
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.yinxiang.note.png'
  }
};

export { Webapps, Tools, Widgets };
