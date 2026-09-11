
import { Link } from "react-router-dom";

function EdubecksLogo() {
  return (
    <div>
      {" "}
      <Link to="/">
        <div className="tw-all-center gap-1">
          <div className="size-10">
            <img
              src="/edubecks.png"
              alt="edubecks logo"
              className="size-full object-contain"
            />
          </div>
          <div className="h-10 w-1 rounded-full bg-edubecks-pink8F"></div>
          <div>
            <p className="leading-4 font-medium">edubeck</p>
            <p className="leading-4 font-medium">Tutoring Services</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EdubecksLogo;
