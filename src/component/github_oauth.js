const axios = require("axios").default;
const boom = require("@hapi/boom");

// github 授权处理
// const code = "7e07b3a29c193c026af9";
const clients = {
  portal: "f3505bc46977fad4bb33",
};
console.log("github secret", process.env.GITHUB_PORTAL_SECRET);
const githubRoute = {
  method: "POST",
  path: "/oauth/github/{app?}",
  handler: async ({ params, payload }, h) => {
    console.log({ payload });
    const { app = null } = params;
    const { code = null } = payload;
    if (!code) {
      return boom.badData("缺少code参数");
    }
    if (!app || !clients[app]) {
      return boom.badData("缺少client参数");
    }
    try {
      const { status, data } = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          client_id: clients[app],
          client_secret: process.env.GITHUB_PORTAL_SECRET,
          code: code,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (status == 200) {
        if (data.error && data.error == "incorrect_client_credentials") {
          return h.response({
            code: -1,
            msg: "服务器端Github OAuth 配置有误",
          });
        }
        if (data.error && data.error == "bad_verification_code") {
          console.log("error data", { data });
          return h.response({
            code: -1,
            msg: "Code不合法或已过期",
          });
        } else {
          return h.response({
            code: 0,
            msg: "正常响应",
            data,
          });
        }
      } else {
        return boom.badRequest("请求有误");
      }
    } catch (error) {
      console.log({ error });
      return boom.serverUnavailable("GitHub OAuth 服务暂不可用");
    }
  },
};
module.exports = [githubRoute];
