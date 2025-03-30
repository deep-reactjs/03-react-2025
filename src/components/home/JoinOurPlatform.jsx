import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { AUTH_TABS } from "../../constant/data";
import { twMerge } from "tailwind-merge";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const JoinOurPlatform = () => {
  const [activeTab, setActiveTab] = useState(AUTH_TABS.signIn.id);
  return (
    <div className="flex items-center flex-col xl:flex-row gap-4">
      <div className="flex-1 space-y-2.5">
        <SectionHeading showViewAll={false} text="Join Our Platform" />
        <p className="text-white text-xl max-w-md">
          You can be one of the{" "}
          <span className="text-primary-400">members</span> of our platform by
          just adding some necessarily information. if you already have an
          account on our website, you can just hit the{" "}
          <span className="text-secondary-400">Login button</span>.
        </p>
      </div>
      <div className="p-6 bg-primary-950 w-full md:w-min rounded-xl md:max-w-[487px]">
        <div className="flex items-center justify-center gap-4">
          {Object.keys(AUTH_TABS).map((key) => (
            <div
              className={twMerge(
                "text-primary-300 text-xl font-semibold cursor-pointer",
                activeTab === AUTH_TABS[key].id &&
                  "text-primary-400 text-2xl font-bold border-b-2 border-primary-400 pb-2"
              )}
              onClick={() => setActiveTab(AUTH_TABS[key].id)}
            >
              {AUTH_TABS[key].title}
            </div>
          ))}
        </div>
        {activeTab === AUTH_TABS.signIn.id ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default JoinOurPlatform;
