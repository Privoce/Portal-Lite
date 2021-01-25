import Navs from './component/SwiperTabs/nav_data';
import AllTools from './component/SwiperTabs/tool_data';
import WeiboHot from './widgets/WeiboHot';
import MPDaily from './widgets/MPDaily';
import Weather from './widgets/Weather';
import Covid from './widgets/Covid';
import TimezoneClock from './widgets/TimezoneClock';
import GithubTrending from './widgets/GithubTrending';
import GithubDashboard from './widgets/GithubDashboard';
import Calc from './widgets/Calc';
import YinNote from './widgets/YinNote';
import ZhihuHot from './widgets/ZhihuHot';
import DoubanHotTopics from './widgets/DoubanHotTopics';
import DailyShici from './widgets/DailyShiCi';
import YiYan from './widgets/YiYan';
import BingDailyPicture from './widgets/BingDailyPicture';
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
  'timezone-clock': {
    title: '国际时钟',
    description: '便捷查看多个时区时间，最多支持添加三个。',
    compact: true,
    // preset: true,
    disableScroll: true,
    comp: <TimezoneClock />,
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.world.clock.png'
  },
  yiyan: {
    title: '一言',
    description:
      '简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。 或是感动，或是开心，有或是单纯的回忆。',
    compact: true,
    // preset: true,
    disableScroll: true,
    comp: <YiYan />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.yiyan.png'
  },
  'wb-hot': {
    preset: true,
    title: '微博热搜',
    description: '微博实时热搜，你想了解的，都在这里！',
    defaultSize: 'large',
    sizes: ['middle', 'large'],
    comp: <WeiboHot />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.weibo.png'
  },
  'mp-daily-hot': {
    title: '公众号24小时热文',
    description: '公众号实时热文，你想了解的，都在这里！',
    sizes: ['middle', 'large'],
    comp: <MPDaily />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.mp.png'
  },
  'daily-shici': {
    title: '今日诗词',
    description: '每天一句诗词，根据时间、地点、天气、事件智能推荐',
    compact: true,
    sizes: ['middle', 'large'],
    comp: <DailyShici />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.daily.shici.png'
  },
  'zhihu-hot': {
    title: '知乎热搜榜',
    sizes: ['middle', 'large'],
    description: '知乎实时热搜，你想了解的，都在这里！',
    compact: true,
    comp: <ZhihuHot />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.hot.zhihu.png'
  },
  'gh-dashboard': {
    title: 'Github个人仓库',
    sizes: ['middle', 'large'],
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
  'bing-daily-pic': {
    // preset: true,
    title: '必应壁纸',
    description: '快速浏览与下载必应高清壁纸',
    compact: true,
    disableScroll: true,
    comp: <BingDailyPicture />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.bing.pics.png'
  },
  'douban-topic-hot': {
    // preset: true,
    title: '豆瓣24小时话题',
    description: '直达豆瓣24小时热门话题',
    // compact: true,
    // disableScroll: true,
    comp: <DoubanHotTopics />,
    screenshot: 'https://gitee.com/zyanggc/oss/raw/master/works/widget.douban.topic.png'
  },

  'gh-trending': {
    title: 'Github趋势',
    description: 'GitHub趋势榜，有开发者和仓库两大分类，让您不再错过GitHub热门仓库',
    compact: true,
    sizes: ['middle', 'large'],
    comp: <GithubTrending />,
    screenshot: '//gitee.com/zyanggc/oss/raw/master/works/widget.github.trending.png'
  },
  calc: {
    title: '计算器',
    description: '一个科学计算器',
    comp: <Calc />,
    sizes: ['middle', 'large'],
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
