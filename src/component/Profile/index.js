import { useState } from 'react';
import Modal from './Modal';
import AuthIcon from './AuthIcon';
export default function Profile({ setSyncing }) {
  const [visible, setVisible] = useState(false);
  const toggleSettingModalVisible = () => {
    setVisible((prev) => !prev);
  };
  // const { username } = userInfo || {};
  return (
    <>
      <AuthIcon setSyncing={setSyncing} openModal={toggleSettingModalVisible} />
      {visible ? <Modal closeModal={toggleSettingModalVisible} /> : null}
    </>
  );
}
