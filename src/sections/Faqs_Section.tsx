import { useState } from "react";
import {
  faqOptions,
  faqTabs,
  type IFaqOptions,
} from "../constants/faqSectionContents";

// The CSS styling was done with desktop first approach
function Faqs_Section() {
  const [activeFaq, setActiveFaq] = useState<IFaqOptions>("generalInformation");
  return (
    <section className="bg-black py-20 xs:max-md:py-10">
      <div className="w-[80%] xs:max-md:w-[90%]  mx-auto space-y-10 xs:max-md:space-y-5">
        <h2 className="text-6xl xs:max-md:text-2xl font-instrument-serif! tracking-[2%] text-white">
          FAQs
        </h2>
        <div className="flex xs:max-md:flex-col xs:max-md:gap-5">
          <div className="w-[30%] xs:max-md:w-full xs:max-md:overflow-auto">
            <ul className="space-y-7 xs:max-md:space-y-0 xs:max-md:flex xs:max-md:gap-7">
              {faqTabs.map((tab) => {
                return (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveFaq(tab.id)}
                      className={`${activeFaq === tab.id ? "text-edubecks-orangeC8" : "text-white/35 hover:text-white"} xs:max-md:text-left font-instrument-serif! text-2xl xs:max-md:text-base `}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[70%]  xs:max-md:w-full flex justify-end xs:max-md:justify-normal">
            <ul className="w-[80%] xs:max-md:w-full space-y-5 xs:max-md:px-2">
              {faqOptions[activeFaq].map((option) => {
                return (
                  <li
                    key={option.id}
                    className="border-[0.5px] border-white/30 rounded-xl text-white p-5 xs:max-md:p-3"
                  >
                    <p className="font-semibold text-xl xs:max-md:text-base text-white">
                      {option.question}
                    </p>
                    <p className="font-light text-edubecks-yellowFA/50 xs:max-md:text-sm">
                      {option.answer}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs_Section;
