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
const Webapps = Navs[0].items;

// {
//   id: 83,
//   title: '防疫的五件小事',
//   themeColor: '#fbf5ea',
//   url: '//works.yangerxiao.com/do-the-five/'
// }
const Tools = AllTools[0].items;
//   {
//     id: 2332,
//     tool: true,
//     frame: true,
//     title: 'Github标星统计',
//     themeColor: '#fbf5ea',
//     url: 'https://stars.yangerxiao.com/'
//   },

//   {
//     id: 212,
//     tool: true,
//     frame: true,
//     title: '生命进程',
//     themeColor: '#fff',
//     url: 'https://works.yangerxiao.com/life-progress/'
//   },
//   {
//     id: 234,
//     tool: true,
//     title: '呼吸调节器',
//     themeColor: '#dae6ed',
//     url: 'https://works.yangerxiao.com/breathe-relaxer/'
//   },
//   {
//     id: 3434,
//     tool: true,
//     frame: true,
//     title: '图片压缩',
//     themeColor: '#ccd0df',
//     url: 'https://works.yangerxiao.com/icfe/'
//   },
//   {
//     id: 332,
//     tool: true,
//     frame: true,
//     title: 'Github社交图生成工具',
//     themeColor: '#f5f5f5',
//     url:
//       'https://works.yangerxiao.com/github-social-image-generator/?repo=https://github.com/zerosoul/github-social-image-generator&utm_source=hacpai.com'
//   },
//   {
//     id: 38990,
//     tool: true,
//     frame: true,
//     title: '中文打乱小工具',
//     themeColor: '#f5f5f5',
//     url: 'https://works.yangerxiao.com/chinese-word-chaos/'
//   },
//   {
//     id: 113,
//     tool: true,
//     frame: true,
//     title: 'CSS箭头代码生成器',
//     themeColor: '#1b2f36',
//     url: 'https://works.yangerxiao.com/css-arrow-generator/'
//   },
//   {
//     id: 1223,
//     tool: true,
//     frame: true,
//     title: '密码生成器',
//     themeColor: '#4c706a',
//     url: 'https://works.yangerxiao.com/strong-password-generator/'
//   }
// ];

const Widgets = {
  'covid-info': {
    title: '国内新冠疫情概况',
    compact: true,
    comp: <Covid />
  },
  'wb-hot': {
    title: '微博热搜',
    comp: <WeiboHot />
  },
  'mp-daily-hot': {
    title: '公众号24小时热文',
    comp: <MPDaily />
  },
  'zhihu-hot': {
    title: '知乎热搜榜',
    compact: true,
    comp: <ZhihuHot />
  },
  'gh-dashboard': { title: 'Github个人仓库', compact: true, comp: <GithubDashboard /> },
  weather: {
    title: '今日天气',
    compact: true,
    comp: <Weather />
  },
  'gh-trending': { title: 'Github趋势', compact: true, comp: <GithubTrending /> },
  calc: { title: '计算器', comp: <Calc />, compact: true },
  'yin-note': { title: '印象笔记', comp: <YinNote /> }
};

export { Webapps, Tools, Widgets };
