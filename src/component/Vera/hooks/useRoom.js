import { useState, useEffect } from 'react';
import { useLazyQuery, useMutation, gql } from '@apollo/client';
const ROOM_QUERY = gql`
  query Room($id: String!) {
    portal_room(where: { id: { _eq: $id } }) {
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
const UPDATE_MEMBERS = gql`
  mutation UpdateMembers($id: String!, $members: jsonb) {
    update_portal_room(_set: { members: $members }, where: { id: { _eq: $id } }) {
      returning {
        connect_id
        members
      }
    }
  }
`;
const UPDATE_ACTIVE = gql`
  mutation UpdateActive($active: Boolean!, $id: String!) {
    update_portal_room(_set: { active: $active }, where: { id: { _eq: $id } }) {
      returning {
        connect_id
        active
      }
    }
  }
`;
function useRoom() {
  const [rid, setRid] = useState(null);
  //   {
  //     pollInterval: 2000
  //   }
  const [loadRoomData, { data, loading, error }] = useLazyQuery(ROOM_QUERY);
  const [updateMembers] = useMutation(UPDATE_MEMBERS);
  const [updateActive] = useMutation(UPDATE_ACTIVE);
  const appendMember = (member = null) => {
    if (!member) return;
    const { id, members } = data?.portal_room[0];
    let mems = members ? [...members, member] : [member];
    console.log('mems', mems);
    updateMembers({ variables: { id, members: mems } });
  };
  const updateRoomActive = (on = true) => {
    const { id, active } = data?.portal_room[0];
    if (active == on) return;
    updateActive({ variables: { id, active: on } });
  };
  useEffect(() => {
    if (rid) {
      loadRoomData({
        variables: {
          id: rid
        }
      });
    }
  }, [rid]);
  return {
    updateRoomActive,
    appendMember,
    setRoom: setRid,
    data: data?.portal_room[0],
    loading,
    error
  };
}

export default useRoom;
