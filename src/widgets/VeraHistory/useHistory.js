import useSWR from 'swr';
import { useState } from 'react';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useHistory(localItems) {
  const [username, setUsername] = useState(null);
  const { data, error } = useSWR(
    username
      ? `${process.env.REACT_APP_SERVICE_DOMAIN}/service/authing/${username}/udf/vera`
      : null,
    fetcher
  );

  return {
    username,
    setUsername,
    data: data?.data || localItems,
    loading: !error && !data,
    error
  };
}

export default useHistory;
