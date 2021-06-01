const selectText = (node) => {
  // node = document.getElementById(node);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn('Could not select text in node: Unsupported browser.');
  }
};
function getUsername() {
  return new Promise((resolve) => {
    let arr = ['user', 'fakename'];
    chrome.storage.sync.get(arr, (result) => {
      let fake = typeof result.fakename !== 'undefined';
      let name = fake ? result.fakename : result.user?.username || '';
      resolve({ value: name, fake } || { value: null, fake: false });
    });
  });
}
function getUser() {
  return new Promise((resolve) => {
    let arr = ['user'];
    chrome.storage.sync.get(arr, (result) => {
      resolve(result.user || null);
    });
  });
}
function getInviteUrl(rid = null) {
  let obj = new URL(location.href);
  // obj.searchParams.append('portal-vera-id', pid);
  // return `http://localhost:3666/transfer/r/${rid}/${encodeURIComponent(obj.href)}?extid=${
  //   chrome.runtime.id
  // }`;
  return `https://nicegoodthings.com/transfer/r/${rid}/${encodeURIComponent(obj.href)}?extid=${
    chrome.runtime.id
  }`;
}
const preventCloseTabHandler = (evt) => {
  evt.preventDefault();
  evt.returnValue = 'Vera is still in connectiong, ary you sure to quit?';
  // return 'Vera is still in connectiong, ary you sure to quit?';
};

function throttle(fn, interval = 200) {
  // 维护上次执行的时间
  let last = 0;
  let inter = 0;
  return function () {
    const context = this;
    const args = arguments;
    const now = Date.now();
    // 根据当前时间和上次执行时间的差值判断是否频繁
    if (now - last >= interval) {
      last = now;
      clearTimeout(inter);
      fn.apply(context, args);
    } else {
      setTimeout(() => {
        fn.apply(context, args);
      }, interval);
    }
  };
}
function getTranslateValues(element) {
  const style = window.getComputedStyle(element);
  const matrix = style['transform'] || style.webkitTransform || style.mozTransform;

  // No transform property. Simply return 0 values.
  if (matrix === 'none' || typeof matrix === 'undefined') {
    return {
      x: 0,
      y: 0,
      z: 0
    };
  }

  // Can either be 2d or 3d transform
  const matrixType = matrix.includes('3d') ? '3d' : '2d';
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

  // 2d matrices have 6 values
  // Last 2 values are X and Y.
  // 2d matrices does not have Z value.
  if (matrixType === '2d') {
    return {
      x: matrixValues[4],
      y: matrixValues[5],
      z: 0
    };
  }

  // 3d matrices have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === '3d') {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14]
    };
  }
}
const stringToHexColor = (str = '') => {
  if (!str) return null;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};
function getVideoPlayer() {
  let videos = Array.from(document.querySelectorAll('video')).filter((v) => !!v.src);
  let largestVideoSize = 0;
  let video = videos[0] || null;

  for (let i = 0; i < videos.length; ++i) {
    let rect = video.getBoundingClientRect();
    let size = rect.height * rect.width;
    if (size > largestVideoSize) {
      largestVideoSize = size;
      video = videos[i];
    }
  }
  return video;
}
function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}
const stopVideoStreams = () => {
  document
    .querySelector('#VERA_FULLSCREEN_CONTAINER')
    .querySelectorAll('video')
    .forEach((v) => v.srcObject.getTracks().forEach((t) => t.stop()));
};
export {
  getVideoPlayer,
  stringToHexColor,
  getInviteUrl,
  throttle,
  selectText,
  getUser,
  getUsername,
  preventCloseTabHandler,
  getTranslateValues,
  shallowEqual,
  stopVideoStreams
};
