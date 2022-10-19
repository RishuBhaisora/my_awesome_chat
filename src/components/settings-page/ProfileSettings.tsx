import { FC, memo } from "react";
import { SiLivechat } from "react-icons/si";
import { ImShare2 } from "react-icons/im";
import IconsWrapper from "../../shared-resources/avatar/IconsWrapper";
import { MdOutlineWallpaper } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import {
  CameraFilled,
  EditFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";

type ProfileSettingsProps = {};

const ProfileSettings: FC<ProfileSettingsProps> = (props) => {
  return (
    <div className="bg-white h-full md:w-1/2 md:rounded-md p-5 overflow-y-auto">
      <h1 className="font-bold text-md md:text-lg ">Profile Settings</h1>
      <div className="flex md:space-x-10 space-x-5 pb-8 border-b-2 border-gray-300">
        <div className="p-1">
          <div className="md:mt-10 mt-8 md:ml-4  md:w-[85px] md:h-[85px] w-[75px] h-[75px] p-[2.6px] rounded-full bg-white  drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]">
            <img
              className="md:w-20 md:h-20 w-[70px] h-[70px] rounded-full object-cover"
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            />
          </div>
        </div>
        <div className="md:mt-[60px] mt-[47px]">
          <h1 className="font-bold text-xl md:text-xl">Krishna </h1>
          <h2 className="font-semibold text-md md:text-lg">
            Stay home stay safe
          </h2>
        </div>
      </div>
      <div className="mt-10 md:pl-8 pl-5 ">
        <IconsWrapper title="Profile.">
          <FaUserCircle />
        </IconsWrapper>
        <IconsWrapper title="Edit Profile Name.">
          <EditFilled />
        </IconsWrapper>
        <IconsWrapper title="Edit Profile Status Info.">
          <SiLivechat />
        </IconsWrapper>
        <IconsWrapper title="Edit Profile Photo.">
          <CameraFilled />
        </IconsWrapper>
        <IconsWrapper title="Help.">
          <QuestionCircleOutlined />
        </IconsWrapper>
        <IconsWrapper title="Change Wallpaper.">
          <MdOutlineWallpaper />
        </IconsWrapper>
        <IconsWrapper title="Invite.">
          <ImShare2 />
        </IconsWrapper>
      </div>
    </div>
  );
};

ProfileSettings.defaultProps = {};

export default memo(ProfileSettings);
