import salon from '../salon.config.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={salon.logo.light} alt={salon.logo.alt} className="footer-logo" />
        <div>
          <div className="script footer-script">Cut · Color · Confidence</div>
          <SocialLinks />
        </div>
      </div>
      <div className="footer-info">
        <span>{salon.address.street}, {salon.address.cityLine}</span>
        <a href={`tel:${salon.phone.e164}`}>{salon.phone.display}</a>
        <span>{salon.hoursSummary.open} · By appointment</span>
      </div>
    </footer>
  );
}
