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
        themeColor: '#f6f6f6',
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
    title: '效率',
    items: [
      {
        title: '格式转换',
        url: 'https://cloudconvert.com/',
        themeColor: '#888',
        popular: true
      },
      {
        title: '计算器',
        url: 'https://www.desmos.com/scientific',
        themeColor: '#FFD902',
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
    title: '生活',
    items: [
      {
        title: '天气预报',
        url: 'https://weather.com/',
        themeColor: '#FD2'
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
        themeColor: '#FFD'
      }
    ]
  }
];
let popular_items = [];

Tools.forEach((nav) => {
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
Tools.unshift(populars);
export default Tools;
