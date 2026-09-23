import { SITE } from "@/data/site";
import { LogoIcon } from "./icons";

export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${SITE.name}, về đầu trang`}>
      <span className="logo-mark" aria-hidden="true">
        <LogoIcon />
      </span>
      {SITE.name}
    </a>
  );
}
