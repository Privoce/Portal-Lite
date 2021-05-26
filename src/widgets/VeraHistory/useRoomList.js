import { useEffect } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
const GET_ROOM_LIST = gql`
  query RoomList($host: String!) {
    portal_room(where: { host: { _eq: $host } }) {
      active
      connect_id
      created_at
      host
      id
      link
      name
      members
      password
    }
  }
`;
function useRoomList(username) {
  const [loadUserData, { loading, data, error }] = useLazyQuery(GET_ROOM_LIST, {
    pollInterval: 2000
  });
  useEffect(() => {
    if (username) {
      loadUserData({
        variables: {
          host: username
        }
      });
    }
  }, [username]);
  return {
    username,
    data: data?.portal_room,
    loading: loading,
    error
  };
}

export default useRoomList;
