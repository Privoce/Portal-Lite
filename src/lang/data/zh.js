const zh = {
  title: '中文',
  value: 'zh',
  words: {
    profile: {
      avatar: '头像',
      name: '名称',
      mobile: '手机号',
      email: '邮箱',
      edit: '编辑',
      logout: '退出登录'
    },
    setting: {
      clear: '清除背景',
      export: '导出数据',
      import: '导入数据',
      reset: '重置全部',
      feedback: '反馈',
      tip: '暂未产生本地数据'
    },
    modal: {
      share: {
        title: '分享',
        tip: '通过以下链接分享我的小组件主页',
        copy: '复制链接',
        copied: '已复制',
        done: '完成'
      },
      widgets: {
        added: '已添加的小组件',
        notAdded: '未添加的小组件'
      }
    },
    widget: {
      reload: '重新加载',
      error: '出错了~',
      loading: '加载中',
      removing: '确定移除小组件',

      goAuth: {
        initializing: '初始化中',
        tip: '暂未授权',
        btnTxt: '去授权'
      },
      opts: {
        shareModal: {
          title: '分享',
          tip: '用以下链接分享此组件',
          loginTip: '请先登录',
          copy: '复制链接',
          copied: '已复制',
          done: '完成'
        },
        setting: '设置',
        remove: '移除',
        fullscreen: '全屏',
        share: '分享',
        open: { newTab: '新页面打开', standalone: '独立页面打开' },
        sizes: {
          middle: '中',
          large: '大'
        }
      }
    },
    // 对应各个小组件，key必须和id一致
    widgets: {
      // 导航小组件
      navs: {
        title: '导航',
        modal: {
          placeholder: {
            name: '名称',
            url: '地址'
          },
          add: '添加'
        },
        cateTitle: {
          popular: 'Popular',
          social: 'Social',
          media: 'Media',
          shopping: 'Shopping',
          news: 'News&Reading',
          office: 'Office',
          tool: 'Tools'
        },
        addNav: '添加导航'
      },
      // 搜索引擎小组件
      searchs: {
        title: '搜索',
        baidu: '百度',
        bing: '必应',
        google: '谷歌',
        duckduck: 'DuckDuckGo'
      },
      // 美国疫情小组件
      ['us-covid-info']: {
        title: '🇺🇸 美国新冠疫情概况',
        closingDate: '截止日期',
        comparePrev: '较上日',
        populationPercent: '人口占比',
        sevenDayChange: '七日变化率',
        noData: '暂无数据',
        blockTitle: {
          confirmed: '累计确诊',
          verifying: '正在检测',
          death: '累计死亡',
          hospital: '当前住院',
          icu: '重症患者',
          ventilator: '呼吸机观察'
        }
      },
      ['my-agenda']: {
        title: '我的日程',
        locale: 'zh-CN',
        fetching: '正在获取日程数据，请耐心等候...',
        today: '今天',
        addEvent: {
          addTo: '添加至',
          submit: '提交'
        }
      }
    }
  }
};

export default zh;
