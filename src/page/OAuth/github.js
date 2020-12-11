console.log('env', process.env);
const getToken = async (code = '') => {
  let result = null;
  try {
    const resp = await fetch(process.env.REACT_APP_GH_OAUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        code
      })
    });
    result = await resp.json();
    console.log({ result });
  } catch (error) {
    console.log({ error });
    result = { code: -1, msg: '出错啦' };
  }
  return result;
};

export default getToken;
