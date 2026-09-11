import contactEmail from "../constants/contactEmail";

export default function bookACall() {
  window.location.href = `mailto:${contactEmail}`;
}
