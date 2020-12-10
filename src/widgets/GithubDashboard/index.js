// client_id:'f3505bc46977fad4bb33',
// scope:'repo',
const code = 'a7b66d47bf6ebb438260';
const cid = 'f3505bc46977fad4bb33';
const rd = 'http://localhost:3000/one-stop-nav/auth';
const secret = 'ab5cff13f4e1208258bb218522690f86a6d4bb5a';
const authLink = `https://github.com/login/oauth/authorize?client_id=${cid}&scope=repo&redirect_uri=${encodeURI(
  rd
)}`;
export default function GithubDashboard() {
  // https://github.com/login/oauth/authorize
  // https://github.com/login/oauth/access_token
  const handleOauth = () => {
    fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        client_id: cid,
        client_secret: secret,
        code: code
      })
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log({ data });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <div>
      <a href={authLink} target="_blank">
        去授权
      </a>
      <button onClick={handleOauth}>拿token</button>
    </div>
  );
}
