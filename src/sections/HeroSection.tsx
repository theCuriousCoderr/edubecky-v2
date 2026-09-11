import heroSectionContents from "../constants/heroSectionContents";
import IconBookACall from "../icons/svgs/IconBookACall";
import IconRefresh from "../icons/svgs/IconRefresh";
import IconStarAward from "../icons/svgs/IconStarAward";
import bookACall from "../utils/bookACall";

// The CSS styling was done with desktop first approach
function HeroSection() {
  return (
    <section className="bg-edubecks-yellowF9 tw-all-center -mt-30 xs:max-md:-mt-20 py-10">
      <div className="w-[80%] xs:max-md:w-[90%] mx-auto">
        {/* pill */}
        <div className="mt-32 inline-flex items-center gap-2 py-2 px-4 rounded-[100px] bg-edubecks-orangeC8 shadow-[0px_0px_4px_0px_#8F1A3840_inset]">
          <div className="size-6 xs:max-md:size-3 tw-all-center">
            <IconStarAward />
          </div>

          <p className="font-medium text-lg xs:max-md:text-xs text-white tracking-[-0.5%] xs:max-md:tracking-tighter">
            {heroSectionContents.pillText}
          </p>
          <div className="size-6 xs:max-md:size-3 tw-all-center">
            <IconStarAward />
          </div>
        </div>
        {/* partitions */}
        <div className="mt-5 xs:max-md:mt-0 flex xs:max-md:flex-col gap-5">
          {/* left section */}
          <div className="w-1/2 xs:max-md:w-full space-y-5 xs:max-md:space-y-3">
            {/* title */}
            <h1 className="font-instrument-serif! text-5xl xs:max-md:text-4xl leading-14 xs:max-md:leading-12 capitalize">
              {heroSectionContents.title}
            </h1>
            {/* sub title */}
            <h2 className="font-medium text-xl xs:max-md:text-base">
              {heroSectionContents.subTitle}
            </h2>
            {/* features */}
            <ul className="space-y-5 xs:max-md:space-y-2">
              {heroSectionContents.features.map((feature) => {
                return (
                  <li key={feature.id} className="flex items-center gap-3">
                    <div className="size-6 xs:max-md:hidden">
                      <IconRefresh />
                    </div>
                    <div className="size-6 md:hidden">
                      <IconRefresh size="16" />
                    </div>
                    <p className="text-xl xs:max-md:text-sm xs:max-md:font-medium tracking-[-0.5%]">
                      {feature.text}
                    </p>
                  </li>
                );
              })}
            </ul>
            {/* Call To Action */}
            <div>
              <button
                onClick={bookACall}
                className="w-[80%] xs:max-md:w-full mx-auto tw-all-center gap-3 xs:max-md:gap-2 py-3 px-5 rounded-[100px] bg-edubecks-pink8F hover:bg-edubecks-pink8F/80 shadow-[0px_0px_4px_0px_#8F1A3840_inset]"
              >
                <div className="size-5 tw-all-center">
                  <IconBookACall />
                </div>
                <p className="font-medium text-white xs:max-md:text-sm">
                  {heroSectionContents.ctaText}
                </p>
              </button>
            </div>
          </div>
          {/* right section */}
          <div className="relative w-1/2 xs:max-md:w-full aspect-1/1.5 max-h-[90svh] xs:max-md:max-h-svh">
            <div className="absolute size-full rounded-3xl overflow-hidden">
              <img
                src="/becky-alaska.jpg"
                alt="Becky Alaska"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute bottom-[5%] xs:max-md:bottom-[3%] w-full">
              <div className="w-[80%] xs:max-md:w-[90%] mx-auto bg-edubecks-orangeED text-center p-5 rounded-2xl">
                <p className="font-extrabold text-2xl xs:max-md:text-xl tracking-[2%]">
                  {heroSectionContents.beckyAlaska.name}
                </p>
                <p className="font-medium text-base tracking-[2%] xs:max-md:text-sm">
                  {heroSectionContents.beckyAlaska.title}
                </p>
                <p className="font-medium text-sm xs:max-md:text-xs text-edubecks-pink8F">
                  {heroSectionContents.beckyAlaska.qualifications}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
