/* eslint-disable @typescript-eslint/no-unused-vars */
import  { FC, ReactElement, useRef, useState } from "react";

import SettingsModal from "../../../features/user/components/header/SettingsModal";
import AvatarHeaderUser from "../../../shared/components/header/AvatarHeaderUser";
import SearchBtnHeader from "../../../shared/components/header/SearchBtnHeader";
import NotificationsMessages from "../../../features/messages/NotificationsMessages";
import NotificationIcon from "../../../features/notifications/components/NotificationIcon";
import MenuHeader from "../../../shared/components/menu/MenuHeader";
import { IHomeHeaderProps } from "../interfaces/header.interface";
import { Link } from "react-router-dom";

const Header:FC <IHomeHeaderProps> = ():ReactElement => {
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);
const isMessageDropdownOpen = useRef <HTMLDivElement | null>(null)
const isNotificationDropdownOpen = useRef <HTMLDivElement | null>(null)
const navElement = useRef<HTMLDivElement | null>(null);



// const isMessageDropdownOpen = false
// const isMessageDropdownOpen = false


  const handleAvatarClick = () => {
    setSettingsModalVisible(!isSettingsModalVisible);
  };

  const handleCloseSettingsModal = () => {
    setSettingsModalVisible(false);
  };

  return (
    <header className="">
      <div className="topbar stick">
        <div className="logo">
          <span><Link to="/home">yebaam</Link></span>
          

        </div>
        <SearchBtnHeader />
        <ul className="web-elements ">
          <li>
            <AvatarHeaderUser onClick={handleAvatarClick} />
          </li>
          <li></li>
          <NotificationsMessages />
          <li>
            <NotificationIcon />
          </li>
          <li>
            <MenuHeader />
          </li>
        </ul>
      </div>
      <SettingsModal
        isVisible={isSettingsModalVisible}
        onProfileClick={handleAvatarClick}
        onClose={handleCloseSettingsModal}
      />
    </header>
  );
};

export default Header;
