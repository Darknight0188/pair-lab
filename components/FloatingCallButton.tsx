import { SITE } from "@/data/site";
import { PhoneFilledIcon } from "./icons";

export default function FloatingCallButton() {
  return (
    <a href={SITE.hotline.href} className="call-float" aria-label={`Gọi hotline ${SITE.hotline.display}`}>
      <PhoneFilledIcon size={24} />
    </a>
  );
}
