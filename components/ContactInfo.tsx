import type { ReactNode } from "react";
import { SITE } from "@/data/site";
import { ClockIcon, LocationIcon, MailIcon, PhoneIcon } from "./icons";

type InfoItem = { title: string; icon: ReactNode; content: ReactNode };

const items: InfoItem[] = [
  { title: "Địa chỉ", icon: <LocationIcon />, content: <p>{SITE.address}</p> },
  { title: "Hotline", icon: <PhoneIcon />, content: <a href={SITE.hotline.href}>{SITE.hotline.display}</a> },
  { title: "Email", icon: <MailIcon />, content: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> },
  { title: "Giờ làm việc", icon: <ClockIcon />, content: <p>{SITE.workingHours}</p> },
];

export default function ContactInfo() {
  return (
    <ul className="info-list">
      {items.map((item) => (
        <li key={item.title}>
          <span className="info-icon" aria-hidden="true">
            {item.icon}
          </span>
          <div>
            <h3>{item.title}</h3>
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  );
}
