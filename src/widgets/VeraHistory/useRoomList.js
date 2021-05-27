import { useEffect, useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
const GET_ROOM_LIST = gql`
  query RoomList {
    portal_room {
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
  const [filtered, setFiltered] = useState([]);
  const [loadRoomList, { loading, data, error }] = useLazyQuery(GET_ROOM_LIST, {
    pollInterval: 2000
  });
  useEffect(() => {
    if (username) {
      loadRoomList();
      // variables: {
      //   host: username
      // }
    }
  }, [username]);
  useEffect(() => {
    if (data && username) {
      let rooms = data?.portal_room;
      let tmps = rooms.filter((r) => {
        return r.host == username || (r.members && r.members.some((m) => m.username == username));
      });
      console.log({ rooms, tmps });
      setFiltered(tmps);
    }
  }, [data, username]);
  return {
    username,
    data: filtered,
    loading: loading,
    error
  };
}

export default useRoomList;
