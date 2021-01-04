const Navs = [
  {
    title: '办公效率',
    items: [
      {
        title: 'Github',
        url: '//github.com',
        icon: 'https://github.com/favicon.ico',
        themeColor: '#fff'
      },
      {
        title: '石墨文档',
        url: '//shimo.im',
        icon: 'https://shimo.im/favicon.ico',
        themeColor: '#f6f6f6'
      },
      {
        title: '印象笔记',
        url: '//yinxiang.com',
        icon: 'https://www.yinxiang.com/favicon.ico',
        themeColor: '#1dbe6b'
      },
      {
        title: 'Office',
        url: 'https://www.office.com/',
        icon: 'https://blobs.officehome.msocdn.com/images/content/images/favicon-8f211ea639.ico',
        themeColor: '#d63c18'
      },
      {
        title: '百度翻译',
        url: '//fanyi.baidu.com',
        icon: 'https://fanyi.baidu.com/favicon.ico',
        themeColor: '#4898fc'
      }
    ]
  },
  {
    title: '社交',
    items: [
      {
        title: '微博',
        url: '//weibo.com',
        icon: './logos/wb.png',
        themeColor: '#FFD902',
        popular: true
      },
      {
        title: '知乎',
        url: '//zhihu.com',
        icon: './logos/zh.png',
        themeColor: '#137ae3'
      },
      {
        title: '豆瓣',
        url: '//douban.com',
        icon: 'https://www.douban.com/favicon.ico',
        themeColor: '#edf4ed'
      }
    ]
  },
  {
    title: '视频音乐',
    items: [
      {
        id: 22222,
        title: '哔哩哔哩',
        url: '//bilibili.com',
        icon: 'https://www.bilibili.com/favicon.ico',
        themeColor: '#77c9e4',
        popular: true
      },
      {
        title: '优酷',
        url: '//youku.com',
        icon: 'https://img.alicdn.com/tfs/TB1WeJ9Xrj1gK0jSZFuXXcrHpXa-195-195.png',
        themeColor: '#fff',
        popular: true
      },
      {
        title: '腾讯视频',
        url: '//v.qq.com',
        icon: 'https://v.qq.com/favicon.ico',
        themeColor: '#Ff9',
        popular: true
      },
      {
        title: '爱奇艺',
        url: '//iqiyi.com',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/aiqiyi.png',
        themeColor: '#07D302',
        popular: true
      },
      {
        title: '网易云音乐',
        url: '//music.163.com',
        icon: 'https://s1.music.126.net/style/favicon.ico?v20180823',
        themeColor: '#c01119'
      },
      {
        title: '酷狗',
        url: '//kugou.com',
        icon: 'https://www.kugou.com/favicon.ico',
        themeColor: '#fff'
      }
    ]
  },
  {
    title: '购物',
    items: [
      {
        title: '淘宝',
        url: '//taobao.com',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/淘宝,TAO,alibaba,1688.png',
        themeColor: '#FF6900',
        popular: true
      },
      {
        title: '京东',
        url: '//jd.com',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/京东icon-01.png',
        themeColor: '#FF2F2D'
      },
      {
        title: '苏宁易购',
        url: 'https://www.suning.com/',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/苏宁易购-01.png',
        themeColor: '#fff'
      }
    ]
  },
  {
    title: '新闻阅读',
    items: [
      {
        title: '虎嗅网',
        url: '//huxiu.com',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/6fDNqR.jpg',
        themeColor: '#f60'
      },
      {
        title: '新华网',
        url: 'http://xinhuanet.com',
        icon: 'http://xinhuanet.com/favicon.ico',
        themeColor: '#167ff8'
      }
    ]
  }
];
let popular_items = [];

Navs.forEach((nav) => {
  let { items } = nav;
  items.forEach((itm) => {
    if (itm.popular) {
      popular_items.push(itm);
    }
  });
});
let populars = {
  title: '常用',
  items: popular_items
};
Navs.unshift(populars);
export default Navs;
