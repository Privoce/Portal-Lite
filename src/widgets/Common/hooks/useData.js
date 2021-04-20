import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useData(api) {
  const { data: resp, error } = useSWR(api, fetcher);
  const { code, data = null, msg } = resp || {};
  return {
    data,
    loading: !error && !data,
    error: code !== 0 ? msg : null || error
  };
}

export default useData;
