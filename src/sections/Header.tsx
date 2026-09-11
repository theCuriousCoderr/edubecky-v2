import { useState } from "react";
import EdubecksLogo from "../components/EdubecksLogo";
import IconRegisterYourWard from "../icons/svgs/IconRegisterYourWard";
import IconBookACall from "../icons/svgs/IconBookACall";
import EdubecksLogoSm from "../components/EdubecksLogoSm";
import IconMenu from "../icons/svgs/IconMenu";
import IconClose from "../icons/svgs/IconClose";
import bookACall from "../utils/bookACall";

// The CSS styling was done with desktop first approach
function Header() {
  const [showDropDown, setShowDropDown] = useState(false);
  function toggleMenu() {
    setShowDropDown(!showDropDown);
  }
  return (
    <header className="xs:max-md:fixed xs:max-md:w-full xs:max-md:top-0 relative z-10 border-b border-edubecks-pink8F/30 bg-white xs:max-md:h-auto h-22">
      {/* desktop view header */}
      <div className="xs:max-md:hidden w-[80%] mx-auto tw-justify-between py-5">
        {/* Header Logo */}
        <div>
          <EdubecksLogo />
        </div>

        {/* Header Buttons */}
        <div className="flex items-center gap-5">
          {/* Register Your Ward */}
          <div>
            <button onClick={bookACall} className="flex gap-3 items-center py-3 px-5 rounded-[100px] bg-edubecks-grayF9 hover:bg-white shadow-[0px_0px_4px_0px_#8F1A3840_inset]">
              <div className="size-5 tw-all-center">
                <IconRegisterYourWard />
              </div>
              <p className="font-medium text-edubecks-orangeC8">
                Register your ward
              </p>
            </button>
          </div>
          {/* Book A Call */}
          <div>
            <button onClick={bookACall} className="flex gap-3 items-center py-3 px-5 rounded-[100px] bg-edubecks-pink8F hover:bg-edubecks-pink8F/80 shadow-[0px_0px_4px_0px_#8F1A3840_inset]">
              <div className="size-5 tw-all-center">
                <IconBookACall />
              </div>
              <p className="font-medium text-white">Book a call</p>
            </button>
          </div>
        </div>
      </div>

      {/* mobile view header */}
      <div className="md:hidden w-[80%] mx-auto  py-5">
        <div className="tw-justify-between">
          {/* Header Logo */}
          <div>
            <EdubecksLogoSm />
          </div>

          <div className="size-5">
            <button onClick={toggleMenu} className="size-full tw-all-center">
              {showDropDown ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
        {/* Header Buttons */}
        <div hidden={!showDropDown} className="mt-5 space-y-3">
          {/* Register Your Ward */}
          <div>
            <button className="w-full tw-all-center gap-3 items-center py-3 px-5 rounded-[100px] bg-edubecks-grayF9 hover:bg-white shadow-[0px_0px_4px_0px_#8F1A3840_inset]">
              <div className="size-5 tw-all-center">
                <IconRegisterYourWard />
              </div>
              <p className="font-medium text-edubecks-orangeC8 text-sm">
                Register your ward
              </p>
            </button>
          </div>
          {/* Book A Call */}
          <div>
            <button className="w-full tw-all-center gap-3 py-3 px-5 rounded-[100px] bg-edubecks-pink8F hover:bg-edubecks-pink8F/80 shadow-[0px_0px_4px_0px_#8F1A3840_inset]">
              <div className="size-5 tw-all-center">
                <IconBookACall />
              </div>
              <p className="font-medium text-white text-sm">Book a call</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
