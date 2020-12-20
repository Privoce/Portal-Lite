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
const formatNumber = (n, base = 10000) => {
  let tmp = 0;
  if (n >= base) {
    console.log('bingo');
    let border = Number(`10${new Array(String(base).length - 2).fill(9)}`);
    tmp = parseFloat(n / base).toFixed(n >= border ? 1 : 0);
  }
  const token = { 10000: 'W', 1000: 'K', 100: 'B' };
  const result = n > base ? `${tmp}${token[base]}` : n;
  console.log({ result });
  return result;
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

export { getPrefixPath, splitToChunks, formatNumber };
