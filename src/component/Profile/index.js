import { useState } from 'react';
import Modal from './Modal';
import AuthIcon from './AuthIcon';
export default function Profile({ setSyncing }) {
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const toggleSettingModalVisible = () => {
    setVisible((prev) => !prev);
  };
  // const { username } = userInfo || {};
  return (
    <>
      <AuthIcon
        setSyncing={setSyncing}
        user={userInfo}
        updateUserInfo={setUserInfo}
        openModal={toggleSettingModalVisible}
      />
      {/* <StyledWrapper onClick={toggleSettingModalVisible}>
      </StyledWrapper> */}
      {visible ? (
        <Modal
          data={userInfo}
          closeModal={toggleSettingModalVisible}
          updateUserInfo={setUserInfo}
        />
      ) : null}
    </>
  );
}
