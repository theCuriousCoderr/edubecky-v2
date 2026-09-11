import whatWeWillWorkOnSectionContents from "../constants/whatWeWillWorkOnSectionContents";

// The CSS styling was done with desktop first approach
function What_We_Will_Work_On_Section() {
  return (
    <section className="bg-white py-20 xs:max-md:py-10">
      <div className="w-[80%] xs:max-md:w-[90%] mx-auto space-y-10 xs:max-md:space-y-5">
        <h2 className="text-6xl xs:max-md:text-2xl font-instrument-serif! tracking-[2%]">
          What we’ll work on
        </h2>
        <div className="space-y-2">
          {/* first row */}
          <div className="h-[70svh] xs:max-md:h-auto max-h-120 xs:max-md:max-h-full flex xs:max-md:flex-col gap-5">
            {/* first card */}
            <div className="relative h-full  w-[60%] xs:max-md:w-full  bg-edubecks-yellowF4 rounded-2xl p-5 overflow-hidden">
              <div className="space-y-2 xs:max-md:space-y-1 w-[70%] xs:max-md:w-full">
                <p className="text-4xl xs:max-md:text-2xl font-instrument-serif! text-edubecks-goldA0">
                  {whatWeWillWorkOnSectionContents.firstCard.title}
                </p>
                <p className="xs:max-md:text-sm">
                  {whatWeWillWorkOnSectionContents.firstCard.text}
                </p>
              </div>
              <figure className="absolute xs:max-md:relative h-full xs:max-md:max-h-[40svh] xs:max-md:-rotate-z-40 w-1/2 xs:max-md:w-full rotate-30 right-[20%] xs:max-md:right-[5%]">
                <img
                  src="/what-we-will-work-on-first-card.webp"
                  className="size-full object-contain object-top"
                />
              </figure>
            </div>
            {/* second card */}
            <div className="relative h-full w-[40%] xs:max-md:w-full bg-edubecks-pinkED rounded-2xl p-5 xs:max-md:pb-0 flex flex-col">
              <div className="space-y-2 xs:max-md:space-y-1 w-[90%] xs:max-md:w-full">
                <p className="text-4xl xs:max-md:text-2xl font-instrument-serif! text-edubecks-pink8F">
                  {whatWeWillWorkOnSectionContents.secondCard.title}
                </p>
                <p className="xs:max-md:text-sm">
                  {whatWeWillWorkOnSectionContents.secondCard.text}
                </p>
              </div>
              <div className="h-full tw-all-center ">
                <figure className="h-[90%] w-[90%] xs:max-md:size-full tw-all-center overflow-hidden ">
                  <img
                    src="/what-we-will-work-on-second-card.png"
                    className="size-full object-cover object-top -mt-10 xs:max-md:-mb-10 xs:max-md:mt-0"
                  />
                </figure>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="h-[70svh] xs:max-md:h-auto max-h-120 xs:max-md:max-h-full flex xs:max-md:flex-col gap-5">
            {/* third card */}
            <div className="h-full w-[40%] xs:max-md:w-full bg-edubecks-pinkED rounded-2xl p-5 flex flex-col justify-between overflow-hidden">
              <div className="space-y-2 xs:max-md:space-y-1 w-[90%] xs:max-md:w-full">
                <p className="text-4xl xs:max-md:text-2xl font-instrument-serif! text-edubecks-pink8F">
                  {whatWeWillWorkOnSectionContents.thirdCard.title}
                </p>
                <p className="xs:max-md:text-sm">
                  {whatWeWillWorkOnSectionContents.thirdCard.text}
                </p>
              </div>
              <div className="relative h-full xs:max-md:max-h-[50svh]">
                <figure className="absolute xs:max-md:relative -bottom-10 size-full  overflow-">
                  <img
                    src="/what-we-will-work-on-third-card.webp"
                    className="size-full object-contain object-"
                  />
                </figure>
              </div>
            </div>
            {/* fourth card */}
            <div className="h-full w-[60%] xs:max-md:w-full bg-edubecks-yellowF4 rounded-2xl p-5 xs:max-md:pb-0 overflow-hidden">
              <div className="space-y-2 xs:max-md:space-y-1">
                <p className="text-4xl xs:max-md:text-2xl font-instrument-serif! text-edubecks-goldA0">
                  {whatWeWillWorkOnSectionContents.fourthCard.title}
                </p>
                <p className="xs:max-md:text-sm">
                  {whatWeWillWorkOnSectionContents.fourthCard.text}
                </p>
              </div>

              <figure className="size-full w-[80%] xs:max-md:w-full mx-auto h-full">
                <img
                  src="/what-we-will-work-on-fourth-card.webp"
                  className="size-full object-contain object-"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default What_We_Will_Work_On_Section;
