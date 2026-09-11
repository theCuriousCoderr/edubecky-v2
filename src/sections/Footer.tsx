import EdubecksLogo from "../components/EdubecksLogo";
import contactEmail from "../constants/contactEmail";

// The CSS styling was done with desktop first approach
function Footer() {
  return (
    <footer className="bg-edubecks-yellowF9 p-10 xs:max-md:p-0">
      <div className="relative bg-white py-10 xs:max-md:p-0 xs:max-md:pb-10 rounded-3xl tw-all-center overflow-hidden">
        <div className="space-y-16 xs:max-md:space-y-0">
          <div className="space-y-16 xs:max-md:space-y-10 xs:max-md:p-10">
            <div className="space-y-2">
              <div>
                <EdubecksLogo />
              </div>
              <p className="font-semibold text-center text-lg xs:max-md:text-sm tracking-[2%]">
                Helping students excel with confidence .....
              </p>
            </div>
            <div className="text-center space-y-1 xs:max-md:space-y-0">
              <p className="font-bold text-xl xs:max-md:text-lg">Contact Us:</p>
              <p className="font-bold text-edubecks-orangeC8 underline xs:max-md:text-sm">
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            </div>
          </div>

          <p className="font-bold tracking-[-0.5%] text-center xs:max-md:text-sm xs:max-md:border-t xs:max-md:pt-5 xs:max-md:border-edubecks-orangeC8">
            <span>&#169;</span> {new Date().getFullYear()}.{" "}
            <br className="md:hidden" /> Edubeck Tutoring Services
          </p>
        </div>
        <div className="absolute h-44 w-60 xs:max-md:size-20 bottom-0 left-0 tw-all-center">
          <img
            src="/floral-img-1.png"
            alt="Floral Image One"
            className="size-full object-cover object-bottom"
          />
        </div>
        <div className="absolute size-60 xs:max-md:size-20 bottom-0 right-0 tw-all-center">
          <img
            src="/floral-img-2.png"
            alt="Floral Image Two"
            className="size-full object-cover object-bottom"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
