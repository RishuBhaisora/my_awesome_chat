import { FC, memo } from "react";
import { FaClipboardCheck, FaExchangeAlt, FaGlobe } from "react-icons/fa";
import { ImKey } from "react-icons/im";
import { BsFillBellFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  MdBackup,
  MdMessage,
  MdOutlineSecurity,
  MdPrivacyTip,
} from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";

import IconsWrapper from "../../shared-resources/avatar/IconsWrapper";

type AccountSettingsProps = {};

const AccountSettings: FC<AccountSettingsProps> = (props) => {
  return (
    <div className="bg-white h-full md:w-1/2 md:rounded-md p-5 md:overflow-y-auto">
      <h1 className="font-bold text-md md:text-lg">Account Settings</h1>
      <div className="mt-10 md:pl-4 pl-2">
        <IconsWrapper title="Account.">
          <ImKey />
        </IconsWrapper>
        <IconsWrapper title="Theme.">
          <VscColorMode />
        </IconsWrapper>
        <IconsWrapper title="Security.">
          <MdOutlineSecurity />
        </IconsWrapper>
        <IconsWrapper title="Privacy.">
          <MdPrivacyTip />
        </IconsWrapper>
        <IconsWrapper title="Two-step verification.">
          <FaClipboardCheck />
        </IconsWrapper>
        <IconsWrapper title="Notification Settings.">
          <BsFillBellFill />
        </IconsWrapper>
        <IconsWrapper title="Change Number.">
          <FaExchangeAlt />
        </IconsWrapper>
        <IconsWrapper title="Chat Backup.">
          <MdBackup />
        </IconsWrapper>
        <IconsWrapper title="Message Settings.">
          <MdMessage />
        </IconsWrapper>
        <IconsWrapper title="App Language.">
          <FaGlobe />
        </IconsWrapper>
        <IconsWrapper title="Delete Account.">
          <RiDeleteBin5Fill />
        </IconsWrapper>
      </div>
    </div>
  );
};

AccountSettings.defaultProps = {};

export default memo(AccountSettings);
