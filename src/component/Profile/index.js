import { useState, useEffect } from 'react';
import Modal from './Modal';
import AuthIcon from './AuthIcon';
import { useWidgetSettings } from '../../hooks';
export default function Profile({ setSyncing }) {
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const { updateWidgetSetting } = useWidgetSettings();
  const toggleSettingModalVisible = () => {
    setVisible((prev) => !prev);
  };
  useEffect(() => {
    if (userInfo) {
      updateWidgetSetting({ key: 'user', data: userInfo });
    }
  }, [userInfo]);
  // const { username } = userInfo || {};
  return (
    <>
      <AuthIcon
        setSyncing={setSyncing}
        user={userInfo}
        updateUserInfo={setUserInfo}
        openModal={toggleSettingModalVisible}
      />
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
