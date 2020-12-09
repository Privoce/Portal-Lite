const getPrefixPath = (url) => {
  let iconPrefix = '';
  try {
    let urlObj = new URL(url);
    iconPrefix = `${urlObj.origin}${urlObj.pathname}`.endsWith('/') ? url : `${url}/`;
  } catch (error) {
    console.log({ error });
  }
  return iconPrefix;
};
const splitToChunks = (array, parts = 15) => {
  let tmpArr = [...array];
  let loopCount = Math.ceil(tmpArr.length / parts);
  let result = [];
  for (let i = loopCount; i > 0; i--) {
    result.push(tmpArr.splice(0, parts));
  }
  return result;
};

export { getPrefixPath, splitToChunks };
