import { memo } from "react";
import AccountSettings from "./AccountSettings";
import ProfileSettings from "./ProfileSettings";
import ResponsiveContainer from "../../shared-resources/components/ResponsiveContainer";

const SettingsPage = () => {
  return (
    <ResponsiveContainer >
      <div className="md:bg-transparent bg-white overflow-auto md:h-full h-[93%] md:pb-[10px] md:mt-[8px] mt-0 pb-16 gap-8 md:flex ">
        <ProfileSettings />
        <AccountSettings />
      </div>
    </ResponsiveContainer>
  );
};

export default memo(SettingsPage);
