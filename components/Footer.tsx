import { SITE } from "@/data/site";
import { FacebookIcon, PhoneFilledIcon, YoutubeIcon, ZaloIcon } from "./icons";
import Logo from "./Logo";

const socials = [
  { href: SITE.socials.facebook, label: "Facebook của PairLab", icon: <FacebookIcon /> },
  { href: SITE.socials.zalo, label: "Zalo của PairLab", icon: <ZaloIcon /> },
  { href: SITE.socials.youtube, label: "YouTube của PairLab", icon: <YoutubeIcon /> },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <Logo />
          <a href={SITE.hotline.href} className="hotline-big">
            <span className="ring" aria-hidden="true">
              <PhoneFilledIcon size={22} />
            </span>
            <span>
              <small>Hotline tư vấn miễn phí</small>
              <strong>{SITE.hotline.display}</strong>
            </span>
          </a>
          <div className="socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>{SITE.copyright}</span>
          <span>{SITE.taxId}</span>
        </div>
      </div>
    </footer>
  );
}
