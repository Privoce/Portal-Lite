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
      widgets: {
        added: '已添加的小组件',
        notAdded: '未添加的小组件'
      }
    },
    widget: {
      goAuth: {
        initializing: '初始化...',
        tip: '暂未授权',
        btnTxt: '去授权'
      },
      opts: {
        setting: '设置',
        remove: '移除',
        fullscreen: '全屏',
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
        modal: {
          placeholder: {
            name: '名称',
            url: '地址'
          },
          add: '添加'
        },
        addNav: '添加导航'
      },
      // 搜索引擎小组件
      searchs: {
        baidu: '百度',
        bing: '必应',
        google: '谷歌'
      }
    }
  }
};

export default zh;
