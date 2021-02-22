window.onload = () => {
  console.log('popup exec');
  let addNavBtn = document.querySelector('#add_nav_btn');
  addNavBtn.addEventListener(
    'click',
    () => {
      console.log('add nav btn click');
      // 获取当前页面的url信息
      chrome.tabs.getSelected(null, function (tab) {
        let { title, url, favIconUrl: icon, id } = tab;
        console.log({ tab });
        // let themeColor =
        //   document.querySelector('meta[name=theme-color]')?.getAttribute('content') || '#fff';
        try {
          const localData = JSON.parse(localStorage.getItem('WIDGET_SETTINGS_DATA'));
          const { navs, ...rest } = localData;
          const newItem = {
            id,
            title,
            url,
            icon,
            url
          };
          let newLocal = [...navs.local, newItem];
          console.log({ newItem, newLocal });
          localStorage.setItem(
            'WIDGET_SETTINGS_DATA',
            JSON.stringify({ navs: { local: newLocal }, ...rest })
          );
          alert('添加成功');
        } catch (error) {
          alert('添加失败');
        }
      });
    },
    false
  );
  // try {
  //   const localData = JSON.parse(localStorage.getItem('WIDGET_SETTINGS_DATA'));
  //   const {
  //     widgets: { local }
  //   } = localData;
  //   // if(local.includes('navs')){
  //   //   window.
  //   // }
  // } catch (error) {}
};
