import { useState, useEffect } from 'react';
import { useLazyQuery, useMutation, gql } from '@apollo/client';
import { shallowEqual } from './utils';
const ROOM_QUERY = gql`
  query Room($id: String!) {
    portal_room(where: { id: { _eq: $id } }) {
      personal
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
  const appendMember = () => {
    const { id, members = [] } = data?.portal_room[0];
    chrome.storage.sync.get(['user', 'fakename'], (res) => {
      console.log('local user data', res.user, res.fakename);
      const { user = null, fakename = null } = res;
      let member = null;
      if (user) {
        let { id, username, photo } = user;
        member = { id, username, photo };
      } else {
        member = { username: fakename || 'Guest' };
      }
      let tmps = members ? members : [];
      let filterd = tmps.filter((t) => {
        return shallowEqual(t, member);
      });
      console.log('mems', tmps, filterd, member);
      // 已经存在
      if (filterd.length) {
        return;
      }
      let mems = [...tmps, member];
      console.log('mems', mems);
      updateMembers({ variables: { id, members: mems } });
    });
  };
  const updateRoomActive = (on = true) => {
    const { id } = data?.portal_room[0];
    // console.log('active and on', active, on);
    // if (active == on) return;
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
