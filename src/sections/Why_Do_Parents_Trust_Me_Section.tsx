import whyDoParentsTrustMeSectionContents from "../constants/whyDoParentsTrustMeSectionContents";

// The CSS styling was done with desktop first approach
function Why_Do_Parents_Trust_Me_Section() {
  return (
    <section className="bg-black py-20 xs:max-md:py-10">
      <h2 className="w-[80%] xs:max-md:w-[90%] mx-auto text-6xl xs:max-md:text-2xl font-instrument-serif! tracking-[2%] text-white">
        Why Do <br /> Parents Trust Me?
      </h2>
      <div className="xs:max-md:mt-10 flex xs:max-md:flex-col-reverse gap-5 w-[90%] xs:max-md:mx-auto">
        <div className="w-[60%] xs:max-md:w-full">
          <img
            src="/edubecks-og-image.png"
            alt="Becky Alaska smiling confidently, surrounded by parent testimonials praising improved grades and confidence"
            className="size-full object-contain xs:max-md:object-cover p-5"
          />
        </div>
        <div className="w-[40%] xs:max-md:w-full">
          <ul className="space-y-5 xs:max-md:space-y-4">
            {whyDoParentsTrustMeSectionContents.reasons.map((reason, idx) => {
              return (
                <li
                  key={reason.id}
                  className="bg-edubecks-yellowFA rounded-xl p-5 space-y-3 xs:max-md:space-y-1"
                >
                  <p className="text-2xl tracking-[-0.5%] font-instrument-serif! text-edubecks-orangeC8">
                    {(idx + 1).toString().padStart(2, "0")}.
                  </p>
                  <p className="tracking-[-0.5%] leading-8 xs:max-md:leading-6 xs:max-md:text-sm">{reason.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Why_Do_Parents_Trust_Me_Section;
