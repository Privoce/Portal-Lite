const Tools = [
  {
    title: '设计',
    items: [
      {
        title: '色彩选择',
        url: 'http://color.adobe.com/',
        // icon: 'https://github.com/favicon.ico',
        themeColor: '#fff'
      },
      {
        title: 'PhotoShop Online',
        url: 'https://www.photopea.com/',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/adobe-photoshop.png',
        themeColor: '#0b2446',
        popular: true
      },
      {
        id: 2333,
        tool: true,
        title: '中国色🇨🇳',
        themeColor: '#f9906f',
        url: 'https://colors.ichuantong.cn/',
        frame: true
      }
    ]
  },
  {
    title: '办公效率',
    items: [
      {
        title: '格式转换',
        url: 'https://cloudconvert.com/',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/transfer.png',
        themeColor: '#fff',
        popular: true
      },
      {
        title: '计算器',
        url: 'https://www.desmos.com/scientific',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/jisuanqi.png',
        themeColor: '#003461',
        popular: true,
        frame: true
      },
      {
        title: 'Markdown编辑',
        url: 'https://www.zybuluo.com/mdeditor',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/file-markdown.png',
        themeColor: '#fff',
        popular: true,
        frame: true
      },

      {
        title: 'ProcessOn流程图',
        url: 'https://www.processon.com/',
        themeColor: '#54b9cf'
      },
      {
        title: '图片压缩',
        url: 'https://squoosh.app/',
        themeColor: '#FFD902',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/compress.png',
        popular: true,
        frame: true
      },
      {
        title: 'PPT搜索',
        url: 'https://www.slideshare.net/',
        themeColor: '#F902'
      }
    ]
  },
  {
    title: '编程开发',
    items: [
      {
        title: 'JSON编辑',
        url: 'https://www.beejson.com/',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/JSON.png',
        themeColor: '#eee',
        popular: true
      }
    ]
  },
  {
    title: '生活',
    items: [
      {
        title: '在线汉语词典',
        url: 'http://xh.5156edu.com/',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/cidian.png',
        themeColor: '#fff'
      },
      {
        title: '天气预报',
        url: 'https://weather.com/',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/weather.png',
        themeColor: '#37aad2'
      },
      {
        title: 'KTV',
        url: 'https://useful.tools/karaoke',
        themeColor: '#F02'
      }
    ]
  },
  {
    title: '高级',
    items: [
      {
        title: '图像识别',
        url: 'https://second-state.github.io/wasm-learning/faas/mobilenet/html/index.html',
        themeColor: '#FFD098'
      },
      {
        title: '书籍搜索',
        url: 'http://libgen.rs/',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/book.png',
        themeColor: '#FFD'
      },
      {
        title: '奶牛快传',
        url: 'https://cowtransfer.com/',
        icon: 'https://background.cowtransfer.com/apple-icon-57x57.png',
        themeColor: '#fb7f7b'
      }
    ]
  }
];
let popular_items = [];

Tools.forEach((nav) => {
  let { items } = nav;
  items.forEach((itm) => {
    itm.tool = true;
    if (itm.popular) {
      popular_items.push(itm);
    }
  });
});
let populars = {
  title: '常用',
  items: popular_items
};
Tools.unshift(populars);
export default Tools;
