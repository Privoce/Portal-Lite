import { useState } from 'react';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function usePets(initialPet, initalData) {
  const [pet, setPet] = useState(initialPet);
  const { data, error } = useSWR(
    `${import.meta.env.VITE_SERVICE_DOMAIN}/service/animals/${pet}`,
    fetcher
  );
  const { code, data: pets, msg } = data || {};
  return {
    updatePet: setPet,
    pet,
    pets: pets || initalData,
    loading: !error && !data,
    error: code !== 0 ? msg : null || error
  };
}

export default usePets;
