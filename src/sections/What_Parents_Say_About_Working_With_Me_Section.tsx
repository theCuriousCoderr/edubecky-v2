import whatParentsSaySectionContents from "../constants/whatParentsSaySectionContents";
import IconBgPattern1 from "../icons/svgs/IconBgPattern1";
import IconBgPattern2 from "../icons/svgs/IconBgPattern2";

// The CSS styling was done with desktop first approach
function What_Parents_Say_About_Working_With_Me_Section() {
  return (
    <section className="bg-edubecks-yellowF9 py-20 xs:max-md:py-10">
      <div className="w-[80%] xs:max-md:w-[90%] mx-auto space-y-10">
        <h2 className="text-6xl xs:max-md:text-2xl font-instrument-serif! tracking-[2%]">
          What Parents Say About <br /> Working With Me?
        </h2>
        <div className="space-y-2">
          <ul className="flex xs:max-md:flex-col flex-wrap gap-x-[2%] gap-y-5 justify-center">
            {whatParentsSaySectionContents.reviews.map((review, idx) => {
              const Flag = review.flag;
              const isEven = idx % 2 === 0;
              return (
                <li
                  key={review.id}
                  className="relative z-10  w-[49%] xs:max-md:w-full p-5 bg-white rounded-2xl overflow-hidden space-y-2"
                >
                  <div
                    className={`${isEven ? "opacity-10" : "opacity-100"} absolute -z-10 w-[50%] xs:max-md:w-[70%] -right-5 top-0 xs:max-md:-bottom-10 tw-all-center xs:max-md:items-end overflow-hidden`}
                  >
                    {isEven ? <IconBgPattern1 /> : <IconBgPattern2 />}
                  </div>
                  <p className="xs:max-md:text-sm">{review.text}</p>
                  <figure className="size-6 tw-all-center  rounded-full">
                    <Flag />
                  </figure>
                  <div>
                    <p className="font-semibold text-lg xs:max-md:text-sm tracking-[-0.5%]">
                      {review.name}
                    </p>
                    <p className="text-sm tracking-[-0.5%]">
                      {" "}
                      {review.occupation}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default What_Parents_Say_About_Working_With_Me_Section;
