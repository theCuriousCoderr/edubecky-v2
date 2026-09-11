
import { Link } from "react-router-dom";

function EdubecksLogoSm() {
  return (
    <div>
      {" "}
      <Link to="/">
        <div className="tw-all-center gap-0.5">
          <div className="size-6">
            <img
              src="/edubecks.png"
              alt="edubecks logo"
              className="size-full object-contain"
            />
          </div>
          <div className="h-6 w-0.5 rounded-full bg-edubecks-pink8F"></div>
          <div>
            <p className="leading-3 font-medium text-xs">edubeck</p>
            <p className="leading-3 font-medium text-xs">Tutoring Services</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EdubecksLogoSm;
