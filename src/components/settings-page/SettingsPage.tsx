import { memo } from "react";
import AccountSettings from "./AccountSettings";
import ProfileSettings from "./ProfileSettings";
import Container from "../../shared-resources/components/Container";
 
const SettingsPage = () => {
  return (
    <Container className="overflow-hidden">
      <div className="p-2 md:p-0">
        <input className="md:pl-5 rounded-lg w-full h-[6vh]" />
      </div>
      <div className=" h-full md:pt-8 pb-10 md:space-x-10 md:flex overflow-y-auto ">
        <ProfileSettings />
        <AccountSettings />
      </div>
    </Container>
  );
};

export default memo(SettingsPage);
