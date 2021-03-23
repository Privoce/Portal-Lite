import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useHistory(user) {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_SERVICE_DOMAIN}/service/authing/${user}/udf/vera`,
    fetcher
  );

  return {
    data: data?.data,
    loading: !error && !data,
    error
  };
}

export default useHistory;
