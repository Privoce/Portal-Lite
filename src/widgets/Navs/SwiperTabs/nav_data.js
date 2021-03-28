const Navs = [
  {
    title: '社交',
    items: [
      {
        id: 'weibo',
        title: '微博',
        url: 'https://weibo.com',
        icon: 'https://static.nicegoodthings.com/privoce/wb.png',
        themeColor: '#FFD902',
        popular: true
      },
      {
        id: 'zhihu',
        title: '知乎',
        url: 'https://zhihu.com',
        icon: 'https://static.nicegoodthings.com/privoce/zhihu.logo.png',
        themeColor: '#0083FF'
      },
      {
        id: 'douban',
        title: '豆瓣',
        url: 'https://douban.com',
        icon: 'https://static.nicegoodthings.com/privoce/douban.logo.png',
        themeColor: '#00C145'
      }
    ]
  },
  {
    title: '视频音乐',
    items: [
      {
        id: 'bilibili',
        title: '哔哩哔哩',
        url: 'https://bilibili.com',
        icon: 'https://static.nicegoodthings.com/privoce/bilibili.logo.png',
        themeColor: '#FF7997',
        popular: true
      },
      {
        id: 'youku',
        title: '优酷',
        url: 'https://youku.com',
        icon: 'https://img.alicdn.com/tfs/TB1WeJ9Xrj1gK0jSZFuXXcrHpXa-195-195.png',
        themeColor: '#fff',
        popular: true
      },
      {
        id: 'qq_v',
        title: '腾讯视频',
        url: 'https://v.qq.com',
        icon: 'https://v.qq.com/favicon.ico',
        themeColor: '#fff',
        popular: true
      },
      {
        id: 'iqiyi',
        title: '爱奇艺',
        url: 'https://iqiyi.com',
        icon: 'https://static.nicegoodthings.com/privoce/aiqiyi.png',
        themeColor: '#07D302',
        popular: true
      },
      {
        id: 'net_music',
        title: '网易云音乐',
        url: 'https://music.163.com',
        icon: 'https://s1.music.126.net/style/favicon.ico?v20180823',
        themeColor: '#FB0000'
      },
      {
        id: 'kugou',
        title: '酷狗',
        url: 'https://kugou.com',
        icon: 'https://static.nicegoodthings.com/privoce/kugou.logo.png',
        themeColor: '#0094FF'
      },
      {
        id: 'ktv',
        title: 'KTV',
        url: 'https://useful.tools/karaoke',
        themeColor: '#F02'
      }
    ]
  },
  {
    title: '购物',
    items: [
      {
        id: 'taobao',
        title: '淘宝',
        url: 'https://taobao.com',
        icon: 'https://static.nicegoodthings.com/privoce/taobao.logo.png',
        themeColor: '#FF5900',
        popular: true
      },
      {
        id: 'tmall',
        title: '天猫',
        url: 'https://tmall.com',
        icon: 'https://static.nicegoodthings.com/privoce/tmall.logo.png',
        themeColor: '#FF0017'
      },
      {
        id: 'jd',
        title: '京东',
        url: 'https://jd.com',
        icon: 'https://static.nicegoodthings.com/privoce/jd.logo.png',
        themeColor: '#EF0011'
      },
      {
        id: 'suning',
        title: '苏宁易购',
        url: 'https://www.suning.com/',
        icon: 'https://static.nicegoodthings.com/privoce/suning.logo.png',
        themeColor: '#fff'
      }
    ]
  },
  {
    title: '新闻阅读',
    items: [
      {
        id: 'huxiu',
        title: '虎嗅网',
        url: 'https://huxiu.com',
        icon: 'https://static.nicegoodthings.com/privoce/huxiuwang2.png',
        themeColor: '#fff',
        popular: true
      },
      {
        id: 'qq_news',
        title: '腾讯新闻',
        url: 'https://news.qq.com/',
        icon: 'https://static.nicegoodthings.com/privoce/txnews.logo.png',
        themeColor: '#fff'
      },
      {
        id: 'book',
        title: '书籍',
        url: 'https://salttiger.com/',
        themeColor: '#fff'
      }
    ]
  },
  {
    title: '办公效率',
    items: [
      {
        id: 'github',
        title: 'Github',
        url: 'https://github.com',
        icon: 'https://static.nicegoodthings.com/privoce/GitHub.png',
        themeColor: '#fff'
      },
      {
        id: 'shimoo',
        title: '石墨文档',
        url: 'https://shimo.im',
        icon: 'https://shimo.im/favicon.ico',
        themeColor: '#f6f6f6'
      },
      {
        id: 'yinxiang',
        title: '印象笔记',
        url: 'https://yinxiang.com',
        icon: 'https://static.nicegoodthings.com/privoce/yinxiang.logo.png',
        themeColor: '#00C51F'
      },
      {
        id: 'office',
        title: 'Office',
        url: 'https://www.office.com/',
        icon: 'https://blobs.officehome.msocdn.com/images/content/images/favicon-8f211ea639.ico',
        themeColor: '#fff'
      },
      {
        id: 'baidu_t',
        title: '百度翻译',
        url: 'https://fanyi.baidu.com',
        icon: 'https://static.nicegoodthings.com/privoce/fanyi.png',
        themeColor: '#4898fc'
      },
      {
        id: 'convert',
        title: '格式转换',
        url: 'https://cloudconvert.com/',
        icon: 'https://static.nicegoodthings.com/privoce/transfer.png',
        themeColor: '#fff'
      },
      {
        id: 'calc',
        title: '计算器',
        url: 'https://www.desmos.com/scientific',
        icon: 'https://static.nicegoodthings.com/privoce/jisuanqi.png',
        themeColor: '#003461',
        frame: true,
        size: 'mobile'
      },
      {
        id: 'markdown',
        title: 'Markdown编辑',
        url: 'https://www.zybuluo.com/mdeditor',
        icon: 'https://static.nicegoodthings.com/privoce/file-markdown.png',
        themeColor: '#fff'
      },

      {
        id: 'pon',
        title: 'ProcessOn流程图',
        url: 'https://www.processon.com/',
        themeColor: '#54b9cf'
      },
      {
        id: 'compress',
        title: '图片压缩',
        url: 'https://squoosh.app/',
        themeColor: '#FFD902',
        icon: 'https://static.nicegoodthings.com/privoce/compress.png',
        frame: true
      },
      {
        id: 'ppt',
        title: 'PPT搜索',
        url: 'https://www.slideshare.net/',
        themeColor: '#F902'
      }
    ]
  },
  {
    title: '实用工具',
    items: [
      {
        id: 'select_color',
        title: '色彩选择',
        url: 'http://color.adobe.com/',
        // icon: 'https://github.com/favicon.ico',
        themeColor: '#fff'
      },
      {
        id: 'ps',
        title: 'PhotoShop Online',
        url: 'https://www.photopea.com/',
        icon: 'https://static.nicegoodthings.com/privoce/adobe-photoshop.png',
        themeColor: '#0b2446',
        frame: true,
        popular: true,
        size: 'pc'
      },

      {
        id: 'iconfont',
        tool: true,
        title: 'IconFont图标资源',
        themeColor: '#090822',
        url: 'https://www.iconfont.cn/'
      },

      {
        id: 'color_china',
        tool: true,
        title: '中国色🇨🇳',
        themeColor: '#f9906f',
        url: 'https://colors.ichuantong.cn/',
        frame: true,
        size: 'pc'
      },
      {
        id: 'json',
        title: 'JSON编辑',
        url: 'https://www.beejson.com/',
        icon: 'https://static.nicegoodthings.com/privoce/JSON.png',
        themeColor: '#eee',
        popular: true
      },
      {
        id: 'shader',
        title: 'Shader编辑器',
        url: 'https://makepad.dev/',
        // icon: 'https://static.nicegoodthings.com/privoce/adobe-photoshop.png',
        themeColor: '#0b2446',
        popular: true
      },
      {
        id: 'cidian',
        title: '在线汉语词典',
        url: 'http://xh.5156edu.com/',
        icon: 'https://static.nicegoodthings.com/privoce/cidian.png',
        themeColor: '#fff'
      },

      {
        id: 'image_shibie',
        title: '图像识别',
        url: 'https://second-state.github.io/wasm-learning/faas/mobilenet/html/index.html',
        themeColor: '#FFD098'
      },
      {
        id: 'booke_search',
        title: '书籍搜索',
        url: 'http://libgen.rs/',
        icon: 'https://static.nicegoodthings.com/privoce/book.png',
        themeColor: '#FFD'
      },
      {
        id: 'nainiu',
        title: '奶牛快传',
        url: 'https://cowtransfer.com/',
        icon: 'https://background.cowtransfer.com/apple-icon-57x57.png',
        themeColor: '#fb7f7b'
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
